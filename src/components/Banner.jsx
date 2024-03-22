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
                backgroundColor: 'primary.main',
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
                }}
            >
                Login
            </Button>
        </BannerLayout>
    );
}