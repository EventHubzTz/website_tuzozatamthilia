import React from 'react'
import { Box, Container, IconButton, Stack, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            sx={{
                // background: "radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),radial-gradient(ellipse farthest-corner at left top, #FEDB37 0%, #FDB931 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)",
                background: 'rgba(0, 0, 0, 0.0)',
                opacity: 0.5,
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0
            }}
        >
            <Container>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        py: 4
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap"
                        }}
                    >
                        <Typography variant="h6" component="span" color="white" sx={{ mr: 1 }}>
                            TMA
                        </Typography>
                        <Typography variant="subtitle2" component="span" color="white">
                            Copyright &copy; {currentYear}
                        </Typography>
                    </Box>
                    <Stack direction="row" spacing={1} sx={{ ml: "auto" }}>
                        <IconButton aria-label="facebook">
                            <FacebookIcon sx={{ color: "white" }} />
                        </IconButton>
                        <IconButton aria-label="twitter">
                            <TwitterIcon sx={{ color: "white" }} />
                        </IconButton>
                        <IconButton aria-label="instagram">
                            <InstagramIcon sx={{ color: "white" }} />
                        </IconButton>
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer