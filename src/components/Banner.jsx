import * as React from 'react';
import BannerLayout from './BannerLayout';
import { Button, Typography } from '@mui/material';

const backgroundImage =
    'assets/images/tma_lion.png';

export default function Banner() {
    return (
        <BannerLayout
            sxBackground={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center',
            }}
        >
            <img
                style={{ display: 'none' }}
                src={backgroundImage}
                alt="increase priority"
            />
            <Typography color="inherit" align="center" variant="h2" marked="center">
                Tanzania Music Awards
            </Typography>
            <Typography
                color="inherit"
                align="center"
                variant="h5"
                sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
            >

            </Typography>
            <Button
                variant="contained"
                size="large"
                component="a"
                href="/"
                sx={{
                    minWidth: 200,
                    transition: 'all 0.5s',
                    '&:hover': {
                        transform: "scale3d(1.05, 1.15, 1)",
                        bgcolor: "green"
                    },
                    background: "radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)",
                }}
            >
                Login
            </Button>
        </BannerLayout>
    );
}