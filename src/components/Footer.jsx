import React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'

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
                        <Typography variant="h6" component="span" color="white" sx={{ mr: 0.5 }}>
                            TMA
                        </Typography>
                        <Typography variant="body2" component="span" color="white">
                            Copyright &copy; {currentYear}
                        </Typography>
                    </Box>
                    <Stack direction="row" alignItems="center" spacing={2} sx={{ ml: "auto" }}>
                        <a href="/" target="_blank" rel='noreferrer'>
                            <i className="fa-brands fa-instagram" style={{ color: "white", fontSize: "25px" }} />
                        </a>
                        <a href="/" target="_blank" rel='noreferrer'>
                            <i className="fa-brands fa-youtube" style={{ color: "white", fontSize: "25px" }} />
                        </a>
                        <a href="/" target="_blank" rel='noreferrer'>
                            <i className="fa-brands fa-x-twitter" style={{ color: "white", fontSize: "25px" }} />
                        </a>
                        <a href="/" target="_blank" rel='noreferrer'>
                            <i className="fa-brands fa-tiktok" style={{ color: "white", fontSize: "25px" }} />
                        </a>
                        <a href="/" target="_blank" rel='noreferrer'>
                            <i className="fa-brands fa-snapchat" style={{ color: "white", fontSize: "25px" }} />
                        </a>
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer