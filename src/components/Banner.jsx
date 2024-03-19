import * as React from 'react';
import BannerLayout from './BannerLayout';
import { Button, Typography } from '@mui/material';

const backgroundImage =
    'assets/images/lion.webp';

export default function Banner() {
    return (
        <BannerLayout
            sxBackground={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundColor: '#7fc7d9', // Average color of the background image.
                backgroundPosition: 'center',
            }}
        >
            {/* Increase the network loading priority of the background image. */}
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
                    bgcolor: "#9E7003"
                }}
            >
                Login
            </Button>
        </BannerLayout>
    );
}