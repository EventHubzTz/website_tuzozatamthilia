import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';

const BannerLayoutRoot = styled('section')(({ theme }) => ({
    color: theme.palette.common.white,
    display: 'flex',
    alignItems: 'end',
    [theme.breakpoints.up('sm')]: {
        height: '80vh',
        minHeight: 500,
        maxHeight: 1300,
    },
}));

const Background = styled('div')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -2,
    width: "100vw",
    height: "100vh"
});

function BannerLayout(props) {
    const { sxBackground, children } = props;

    return (
        <BannerLayoutRoot>
            <Box
                sx={{
                    mt: 3,
                    mb: 14,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                }}
            >
                {children}
                <Box
                    sx={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        backgroundColor: 'common.black',
                        opacity: 0.5,
                        zIndex: -1,
                    }}
                />
                <Background>
                    {/* <iframe
                        style={{ width: "100vw", height: "100vh" }}
                        src="https://www.youtube.com/embed/Ua1ce5rBm3c?si=9JTidnHsYLUXPXrz?rel=0&amp;amp;showinfo=0&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=Ua1ce5rBm3c"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                        scrolling="no"
                        border="0"
                    >
                    </iframe> */}
                    <iframe
                        data-embed="https://youtu.be/Ua1ce5rBm3c"
                        scrolling="no"
                        border="0"
                        style={{ opacity: 0.8, width: "100vw", height: "100vh" }}
                        src="https://www.youtube.com/embed/Ua1ce5rBm3c?rel=0&amp;amp;showinfo=0&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=Ua1ce5rBm3c">
                    </iframe>
                </Background>
            </Box>
        </BannerLayoutRoot>
    );
}

BannerLayout.propTypes = {
    children: PropTypes.node,
    sxBackground: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};

export default BannerLayout;