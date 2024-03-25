import * as React from 'react';
import BannerLayout from './BannerLayout';
import { Box, Button, Typography } from '@mui/material';

const backgroundImage =
    'assets/images/tma_logo2.png';

export default function Banner() {
    return (
        <BannerLayout
            sxBackground={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundColor: 'common.black',
                backgroundPosition: 'center',
            }}
        >
            <img
                style={{ display: 'none' }}
                src={backgroundImage}
                alt="increase priority"
            />
            <Box sx={{ ml: 10 }}>
                <Typography color="inherit" variant="h2">
                    Tanzania Music Awards
                </Typography>
                <Typography
                    color="inherit"
                    variant="body1"
                    sx={{ mb: 4, mt: { xs: 2, sm: 2 } }}
                >
                    The Tanzania Music Awards 2023 are HERE !!
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
                        background: "radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FDB931 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)",
                    }}
                >
                    Login
                </Button>
            </Box>
        </BannerLayout>
    );
}