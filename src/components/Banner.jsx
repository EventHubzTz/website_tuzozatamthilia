import * as React from 'react';
import BannerLayout from './BannerLayout';
import { Box, Typography, Button } from '@mui/material'; // Correct import for Button
import { votingUrl } from '../utils/constants';

const backgroundImage =
    'assets/gif/TTT_Logo_GIF_2.gif';

export default function Banner() {
    return (
        <BannerLayout
            sxBackground={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundColor: 'common.black',
                backgroundPosition: 'center',
            }}
        >
            <Box sx={{
                ml: { xs: 0, sm: 0, md: 10 },
                textAlign: { xs: "center", sm: "center", md: "start" },
                p: { xs: 8, sm: 5, md: 0 }
            }}>
                <Typography color="inherit" variant="h2">
                    Tamthilia | Tanzania
                </Typography>
                {/* <Typography
                    color="inherit"
                    variant="body1"
                    sx={{ mb: 4, mt: { xs: 2, sm: 2 } }}
                >
                    Tuzo Za Tamthilia 2024 are HERE!!
                </Typography> */}
                <Button
                    variant="contained"
                    size="large"
                    component="a"
                    href={votingUrl}
                    sx={{
                        minWidth: 200,
                        transition: 'all 0.5s',
                        color: "black",
                        borderRadius: 0,
                        '&:hover': {
                            transform: "scale3d(1.05, 1.15, 1)",
                            bgcolor: "green",
                            color: "white",
                        },
                        background: "white",
                    }}
                >
                    Tuzo Za Tamthilia 2024 are HERE!! 
                </Button>
            </Box>
        </BannerLayout>
    );
}
