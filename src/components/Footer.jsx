import React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            sx={{
                // background: "radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),radial-gradient(ellipse farthest-corner at left top, #FEDB37 0%, #FDB931 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)",
                backgroundColor: 'common.black',
            }}
        >
            <Container>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        mt: 4,
                        mx: 2
                    }}
                >
                    <Link
                        to="/privacy-policy"
                        onClick={() => {
                            window.scrollTo(0, 0);
                        }}
                    >
                        <Typography
                            color="white"
                            sx={{
                                mr: 3,
                                '&:hover': {
                                    color: "primary.main",
                                },
                            }}
                            variant='body2'
                        >
                            PRIVACY POLICY
                        </Typography>
                    </Link>
                    <Link
                        to="/terms-of-use"
                        onClick={() => {
                            window.scrollTo(0, 0);
                        }}
                    >
                        <Typography
                            color="white"
                            sx={{
                                mr: 3,
                                '&:hover': {
                                    color: "primary.main",
                                },
                            }}
                            variant='body2'
                        >
                            TERMS OF USE
                        </Typography>
                    </Link>
                    <Link
                        to="/terms-and-conditions"
                        onClick={() => {
                            window.scrollTo(0, 0);
                        }}
                    >
                        <Typography
                            color="white"
                            sx={{
                                mr: 3,
                                '&:hover': {
                                    color: "primary.main",
                                },
                            }}
                            variant='body2'
                        >
                            TERMS AND CONDITIONS
                        </Typography>
                    </Link>
                    <Link
                        to="/copyright-compliance"
                        onClick={() => {
                            window.scrollTo(0, 0);
                        }}
                    >
                        <Typography
                            color="white"
                            sx={{
                                mr: 3,
                                '&:hover': {
                                    color: "primary.main",
                                },
                            }}
                            variant='body2'
                        >
                            COPYRIGHT COMPLIANCE
                        </Typography>
                    </Link>
                </Box>
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
                            Tuzo Za Tamthilia
                        </Typography>
                        <Typography variant="body2" component="span" color="white">
                            Copyright &copy; {currentYear}
                        </Typography>
                    </Box>
                    <Stack direction="row" alignItems="center" spacing={{ xs: 1, sm: 1, md: 2 }} sx={{ ml: "auto" }}>
                        <a href="https://tuzozatamthilia.info" target='_blank' rel='noreferrer'>
                            <i className="fa-brands fa-instagram logo" />
                        </a>
                        <a href="https://tuzozatamthilia.info" target='_blank' rel='noreferrer'>
                            <i className="fa-brands fa-youtube logo" />
                        </a>
                        <a href="#_" target='_blank' rel='noreferrer'>
                            <i className="fa-brands fa-x-twitter logo" />
                        </a>
                        <a href="https://tuzozatamthilia.info" target='_blank' rel='noreferrer'>
                            <i className="fa-brands fa-tiktok logo" />
                        </a>
                        <a href="https://tuzozatamthilia.info" target='_blank' rel='noreferrer'>
                            <i className="fa-brands fa-snapchat logo" />
                        </a>
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer