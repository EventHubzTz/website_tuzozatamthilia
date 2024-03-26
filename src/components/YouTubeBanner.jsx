import React from 'react';
import { Box, Container, Typography } from '@mui/material'

function YouTubeBanner() {

    return (
        <Box
            sx={{
                position: 'relative',
            }}
        >
            <iframe sx={{ width: "100vw", height: "100vh" }} src="https://www.youtube.com/embed/Ua1ce5rBm3c?si=9JTidnHsYLUXPXrz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(0, 0, 0, 0.6)',
                }}
            >
                <Container>
                    <Typography
                        variant='h5'
                        sx={{
                            color: 'white',
                            fontSize: '24px',
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}
                    >
                        TANZANIA HEALTH OPPORTUNITY (T.H.O)
                    </Typography>
                    <br />
                    <Typography
                        variant='body1'
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            color: 'white',
                            fontSize: '24px',
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}
                    >
                        The mission of Tanzania health opportunities (THO) is to provide
                        community health services and clinical experience to volunteers
                        by providing the best care to every community through integrated
                        medical outreaches, education, and research. We seek sustainable
                        solutions in the fields of education, healthcare and community empowerment.
                    </Typography>
                </Container>
            </Box>
        </Box>
    )
}

export default YouTubeBanner;