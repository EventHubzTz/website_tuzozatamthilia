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
                backgroundColor: "#9E7003",
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
                        <Typography variant="h5" component="span" color="white" sx={{ mr: 3 }}>
                            Tanzania Music Awards
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