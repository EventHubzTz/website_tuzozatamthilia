import React from 'react'
import Header from '../../components/Header'
import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'

function Home() {

    return (
        <>
            <Header />
            <Banner />
            <Box
                component="section"
                sx={{ display: 'flex', bgcolor: 'primary.main', overflow: 'hidden' }}
            >
                <Container
                    sx={{
                        mt: 10,
                        mb: 15,
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        component="img"
                        src="assets/images/curvyLines.png"
                        alt="curvy lines"
                        sx={{
                            pointerEvents: 'none',
                            position: 'absolute',
                            top: -180,
                            opacity: 0.7,
                        }}
                    />
                    <Typography variant='h3' align="center" sx={{ color: "white" }}>
                        Awards
                    </Typography>
                    <Divider
                        variant="inset"
                        sx={{
                            mt: 2,
                            width: "140px",
                            mx: "auto",
                            borderWidth: 1.5
                        }}
                    />
                    <Typography
                        variant='body1'
                        align="center"
                        sx={{
                            mt: 4,
                            lineHeight: 1.8,
                            color: "white"
                        }}
                    >
                        We've been honored with prestigious awards from leading industry organizations <br />
                        and associations, recognizing our contributions to innovation,  <br />
                        leadership, and best practices in our field.
                    </Typography>
                    <Typography
                        variant='body1'
                        align="center"
                        sx={{
                            mt: 4,
                            lineHeight: 1.8,
                            color: "white",
                        }}
                    >
                        We're proud recipients of innovation awards that celebrate our pioneering spirit,  <br />
                        groundbreaking technologies, and forward-thinking to solving  challenges.
                    </Typography>
                </Container>
            </Box>
            <Grid container sx={{ mt: 0 }}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ position: "relative" }}>
                    <Box
                        component='img'
                        sx={{
                            width: "100%",
                        }}
                        alt="Guitars"
                        src="assets/images/image1.jpg"
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0, 0, 0, 0.0)',
                            transition: 'all 0.5s',
                            '&:hover': {
                                background: 'rgba(0, 0, 0, 0.3)',
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Container>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                height: "100%"
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    mt: { xs: 6, sm: 6, md: 6, lg: 15 }
                                }}
                            >
                                <Carousel
                                    indicators
                                >
                                    <Box>
                                        <Typography variant='subtitle1' align="center" sx={{ fontWeight: 700 }}>
                                            Highlights
                                        </Typography>
                                        <Typography variant='h4' align="center">
                                            Categories
                                        </Typography>
                                        <Typography
                                            variant='body1'
                                            align="center"
                                            sx={{
                                                mt: 4,
                                                lineHeight: 1.8
                                            }}
                                        >
                                            We've been honored with prestigious awards from leading industry organizations <br />
                                            and associations, recognizing our contributions to innovation,  <br />
                                            leadership, and best practices in our field.
                                        </Typography>
                                        <Typography
                                            variant='body1'
                                            align="center"
                                            sx={{
                                                mt: 4,
                                                lineHeight: 1.8
                                            }}
                                        >
                                            We're proud recipients of innovation awards that celebrate our pioneering spirit,  <br />
                                            groundbreaking technologies, and forward-thinking to solving  challenges.
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant='subtitle1' align="center" sx={{ fontWeight: 700 }}>
                                            Highlights
                                        </Typography>
                                        <Typography variant='h4' align="center">
                                            Performers
                                        </Typography>
                                        <Typography
                                            variant='body1'
                                            align="center"
                                            sx={{
                                                mt: 4,
                                                lineHeight: 1.8
                                            }}
                                        >
                                            We've been honored with prestigious awards from leading industry organizations <br />
                                            and associations, recognizing our contributions to innovation,  <br />
                                            leadership, and best practices in our field.
                                        </Typography>
                                        <Typography
                                            variant='body1'
                                            align="center"
                                            sx={{
                                                mt: 4,
                                                lineHeight: 1.8
                                            }}
                                        >
                                            We're proud recipients of innovation awards that celebrate our pioneering spirit,  <br />
                                            groundbreaking technologies, and forward-thinking to solving  challenges.
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant='subtitle1' align="center" sx={{ fontWeight: 700 }}>
                                            Highlights
                                        </Typography>
                                        <Typography variant='h4' align="center">
                                            Artists
                                        </Typography>
                                        <Typography
                                            variant='body1'
                                            align="center"
                                            sx={{
                                                mt: 4,
                                                lineHeight: 1.8
                                            }}
                                        >
                                            We've been honored with prestigious awards from leading industry organizations <br />
                                            and associations, recognizing our contributions to innovation,  <br />
                                            leadership, and best practices in our field.
                                        </Typography>
                                        <Typography
                                            variant='body1'
                                            align="center"
                                            sx={{
                                                mt: 4,
                                                lineHeight: 1.8
                                            }}
                                        >
                                            We're proud recipients of innovation awards that celebrate our pioneering spirit,  <br />
                                            groundbreaking technologies, and forward-thinking to solving  challenges.
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant='subtitle1' align="center" sx={{ fontWeight: 700 }}>
                                            Highlights
                                        </Typography>
                                        <Typography variant='h4' align="center">
                                            Awards
                                        </Typography>
                                        <Typography
                                            variant='body1'
                                            align="center"
                                            sx={{
                                                mt: 4,
                                                lineHeight: 1.8
                                            }}
                                        >
                                            We've been honored with prestigious awards from leading industry organizations <br />
                                            and associations, recognizing our contributions to innovation,  <br />
                                            leadership, and best practices in our field.
                                        </Typography>
                                        <Typography
                                            variant='body1'
                                            align="center"
                                            sx={{
                                                mt: 4,
                                                lineHeight: 1.8
                                            }}
                                        >
                                            We're proud recipients of innovation awards that celebrate our pioneering spirit,  <br />
                                            groundbreaking technologies, and forward-thinking to solving  challenges.
                                        </Typography>
                                    </Box>
                                </Carousel>
                            </Box>
                        </Box>
                    </Container>
                </Grid>
            </Grid>
            <Grid container sx={{ mt: 1 }}>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "100%"
                        }}
                    >
                        <Typography variant='subtitle1' align="center" sx={{ fontWeight: 700 }}>
                            Highlights
                        </Typography>
                        <Typography variant='h4' align="center">
                            Artists
                        </Typography>
                        <Box
                            component='img'
                            sx={{
                                width: "100%",
                                transition: 'all 0.5s',
                                '&:hover': {
                                    transform: "scale3d(1, 1.02, 1.5)",
                                },
                            }}
                            alt="Guitars"
                            src="assets/images/image3.jpg"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "100%"
                        }}
                    >
                        <Typography variant='subtitle1' align="center" sx={{ fontWeight: 700 }}>
                            Highlights
                        </Typography>
                        <Typography variant='h4' align="center">
                            Artists
                        </Typography>
                        <Box
                            component='img'
                            sx={{
                                width: "100%",
                                transition: 'all 0.5s',
                                '&:hover': {
                                    transform: "scale3d(1, 1.02, 1.5)",
                                },
                            }}
                            alt="Guitars"
                            src="assets/images/image5.jpg"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "100%"
                        }}
                    >
                        <Typography variant='subtitle1' align="center" sx={{ fontWeight: 700 }}>
                            Highlights
                        </Typography>
                        <Typography variant='h4' align="center">
                            Artists
                        </Typography>
                        <Box
                            component='img'
                            sx={{
                                width: "100%",
                                transition: 'all 0.5s',
                                '&:hover': {
                                    transform: "scale3d(1, 1.02, 1.5)",
                                },
                            }}
                            alt="Guitars"
                            src="assets/images/image3.jpg"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "100%"
                        }}
                    >
                        <Typography variant='subtitle1' align="center" sx={{ fontWeight: 700 }}>
                            Highlights
                        </Typography>
                        <Typography variant='h4' align="center">
                            Artists
                        </Typography>
                        <Box
                            component='img'
                            sx={{
                                width: "100%",
                                transition: 'all 0.5s',
                                '&:hover': {
                                    transform: "scale3d(1, 1.02, 1.5)",
                                },
                            }}
                            alt="Guitars"
                            src="assets/images/image5.jpg"
                        />
                    </Box>
                </Grid>
            </Grid>

            <Box
                component="section"
                sx={{ display: 'flex', bgcolor: 'primary.main', overflow: 'hidden' }}
            >
                <Container
                    sx={{
                        mt: 10,
                        mb: 15,
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        component="img"
                        src="assets/images/curvyLines.png"
                        alt="curvy lines"
                        sx={{
                            pointerEvents: 'none',
                            position: 'absolute',
                            top: -180,
                            opacity: 0.7,
                        }}
                    />
                    <Typography variant='h3' align="center" sx={{ color: "white" }}>
                        Performance
                    </Typography>
                    <Divider
                        variant="inset"
                        sx={{
                            mt: 2,
                            width: "140px",
                            mx: "auto",
                            borderWidth: 1.5
                        }}
                    />
                    <Typography
                        variant='body1'
                        align="center"
                        sx={{
                            mt: 4,
                            lineHeight: 1.8,
                            color: "white"
                        }}
                    >
                        From soulful singers and acoustic guitarists to energetic bands and versatile DJs, our  <br />
                        musicians bring rhythm, melody, and soul to your event, setting the <br />
                        perfect ambiance and keeping guests entertained.
                    </Typography>
                    <Typography
                        variant='body1'
                        align="center"
                        sx={{
                            mt: 4,
                            lineHeight: 1.8,
                            color: "white"
                        }}
                    >
                        Our professional dancers specialize in a variety of styles, including contemporary, hip- <br />
                        hop, and cultural dances, adding flair, and excitement to any performance.
                    </Typography>
                </Container>
            </Box>
            <Grid container sx={{ mt: 0 }}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ position: "relative" }}>
                    <Box
                        component='img'
                        sx={{
                            width: "100%",
                        }}
                        alt="Guitars"
                        src="assets/images/image1.jpg"
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0, 0, 0, 0.0)',
                            transition: 'all 0.5s',
                            '&:hover': {
                                background: 'rgba(0, 0, 0, 0.3)',
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Container>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                height: "100%"
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    mt: { xs: 6, sm: 6, md: 6, lg: 15 }
                                }}
                            >
                                <Carousel
                                    indicators
                                >
                                    <Box>
                                        <Typography variant='subtitle1' align="center" sx={{ fontWeight: 700 }}>
                                            Highlights
                                        </Typography>
                                        <Typography variant='h4' align="center">
                                            Categories
                                        </Typography>
                                        <Typography
                                            variant='body1'
                                            align="center"
                                            sx={{
                                                mt: 4,
                                                lineHeight: 1.8
                                            }}
                                        >
                                            We've been honored with prestigious awards from leading industry organizations <br />
                                            and associations, recognizing our contributions to innovation,  <br />
                                            leadership, and best practices in our field.
                                        </Typography>
                                        <Typography
                                            variant='body1'
                                            align="center"
                                            sx={{
                                                mt: 4,
                                                lineHeight: 1.8
                                            }}
                                        >
                                            We're proud recipients of innovation awards that celebrate our pioneering spirit,  <br />
                                            groundbreaking technologies, and forward-thinking to solving  challenges.
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant='subtitle1' align="center" sx={{ fontWeight: 700 }}>
                                            Highlights
                                        </Typography>
                                        <Typography variant='h4' align="center">
                                            Performers
                                        </Typography>
                                        <Typography
                                            variant='body1'
                                            align="center"
                                            sx={{
                                                mt: 4,
                                                lineHeight: 1.8
                                            }}
                                        >
                                            We've been honored with prestigious awards from leading industry organizations <br />
                                            and associations, recognizing our contributions to innovation,  <br />
                                            leadership, and best practices in our field.
                                        </Typography>
                                        <Typography
                                            variant='body1'
                                            align="center"
                                            sx={{
                                                mt: 4,
                                                lineHeight: 1.8
                                            }}
                                        >
                                            We're proud recipients of innovation awards that celebrate our pioneering spirit,  <br />
                                            groundbreaking technologies, and forward-thinking to solving  challenges.
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant='subtitle1' align="center" sx={{ fontWeight: 700 }}>
                                            Highlights
                                        </Typography>
                                        <Typography variant='h4' align="center">
                                            Artists
                                        </Typography>
                                        <Typography
                                            variant='body1'
                                            align="center"
                                            sx={{
                                                mt: 4,
                                                lineHeight: 1.8
                                            }}
                                        >
                                            We've been honored with prestigious awards from leading industry organizations <br />
                                            and associations, recognizing our contributions to innovation,  <br />
                                            leadership, and best practices in our field.
                                        </Typography>
                                        <Typography
                                            variant='body1'
                                            align="center"
                                            sx={{
                                                mt: 4,
                                                lineHeight: 1.8
                                            }}
                                        >
                                            We're proud recipients of innovation awards that celebrate our pioneering spirit,  <br />
                                            groundbreaking technologies, and forward-thinking to solving  challenges.
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant='subtitle1' align="center" sx={{ fontWeight: 700 }}>
                                            Highlights
                                        </Typography>
                                        <Typography variant='h4' align="center">
                                            Awards
                                        </Typography>
                                        <Typography
                                            variant='body1'
                                            align="center"
                                            sx={{
                                                mt: 4,
                                                lineHeight: 1.8
                                            }}
                                        >
                                            We've been honored with prestigious awards from leading industry organizations <br />
                                            and associations, recognizing our contributions to innovation,  <br />
                                            leadership, and best practices in our field.
                                        </Typography>
                                        <Typography
                                            variant='body1'
                                            align="center"
                                            sx={{
                                                mt: 4,
                                                lineHeight: 1.8
                                            }}
                                        >
                                            We're proud recipients of innovation awards that celebrate our pioneering spirit,  <br />
                                            groundbreaking technologies, and forward-thinking to solving  challenges.
                                        </Typography>
                                    </Box>
                                </Carousel>
                            </Box>
                        </Box>
                    </Container>
                </Grid>
            </Grid>
            <Grid container sx={{ mt: 1 }}>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "100%"
                        }}
                    >
                        <Typography variant='subtitle1' align="center" sx={{ fontWeight: 700 }}>
                            Highlights
                        </Typography>
                        <Typography variant='h4' align="center">
                            Artists
                        </Typography>
                        <Box
                            component='img'
                            sx={{
                                width: "100%",
                                transition: 'all 0.5s',
                                '&:hover': {
                                    transform: "scale3d(1, 1.02, 1.5)",
                                },
                            }}
                            alt="Guitars"
                            src="assets/images/image3.jpg"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "100%"
                        }}
                    >
                        <Typography variant='subtitle1' align="center" sx={{ fontWeight: 700 }}>
                            Highlights
                        </Typography>
                        <Typography variant='h4' align="center">
                            Artists
                        </Typography>
                        <Box
                            component='img'
                            sx={{
                                width: "100%",
                                transition: 'all 0.5s',
                                '&:hover': {
                                    transform: "scale3d(1, 1.02, 1.5)",
                                },
                            }}
                            alt="Guitars"
                            src="assets/images/image5.jpg"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "100%"
                        }}
                    >
                        <Typography variant='subtitle1' align="center" sx={{ fontWeight: 700 }}>
                            Highlights
                        </Typography>
                        <Typography variant='h4' align="center">
                            Artists
                        </Typography>
                        <Box
                            component='img'
                            sx={{
                                width: "100%",
                                transition: 'all 0.5s',
                                '&:hover': {
                                    transform: "scale3d(1, 1.02, 1.5)",
                                },
                            }}
                            alt="Guitars"
                            src="assets/images/image3.jpg"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "100%"
                        }}
                    >
                        <Typography variant='subtitle1' align="center" sx={{ fontWeight: 700 }}>
                            Highlights
                        </Typography>
                        <Typography variant='h4' align="center">
                            Artists
                        </Typography>
                        <Box
                            component='img'
                            sx={{
                                width: "100%",
                                transition: 'all 0.5s',
                                '&:hover': {
                                    transform: "scale3d(1, 1.02, 1.5)",
                                },
                            }}
                            alt="Guitars"
                            src="assets/images/image5.jpg"
                        />
                    </Box>
                </Grid>
            </Grid>


            <Box
                component="section"
                sx={{ display: 'flex', bgcolor: 'primary.main', overflow: 'hidden' }}
            >
                <Container
                    sx={{
                        mt: 10,
                        mb: 15,
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        component="img"
                        src="assets/images/curvyLines.png"
                        alt="curvy lines"
                        sx={{
                            pointerEvents: 'none',
                            position: 'absolute',
                            top: -180,
                            opacity: 0.7,
                        }}
                    />
                    <Typography variant='h3' align="center" sx={{ color: "white" }}>
                        Talents
                    </Typography>
                    <Divider
                        variant="inset"
                        sx={{
                            mt: 2,
                            width: "140px",
                            mx: "auto",
                            borderWidth: 1.5
                        }}
                    />
                    <Typography
                        variant='body1'
                        align="center"
                        sx={{
                            mt: 4,
                            lineHeight: 1.8,
                            color: "white"
                        }}
                    >
                        Our talent network spans a wide range of industries, sectors, and roles, offering diverse <br />
                        opportunities for individuals with varying skills, backgrounds, and interests. <br />
                        We're dedicated to supporting the growth and development of our talent.
                    </Typography>
                    <Typography
                        variant='body1'
                        align="center"
                        sx={{
                            mt: 4,
                            lineHeight: 1.8,
                            color: "white"
                        }}
                    >
                        Join a community of like-minded individuals who are passionate about making a   <br />
                        collaborating on innovative projects, and contributing to meaningful work
                    </Typography>
                </Container>
            </Box>
            <Grid container sx={{ mt: 1 }}>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "100%"
                        }}
                    >
                        <Typography variant='subtitle1' align="center" sx={{ fontWeight: 700 }}>
                            Talents in
                        </Typography>
                        <Typography variant='h4' align="center">
                            Dancing
                        </Typography>
                        <Box
                            component='img'
                            sx={{
                                width: "100%",
                                transition: 'all 0.5s',
                                '&:hover': {
                                    transform: "scale3d(1, 1.02, 1.5)",
                                },
                            }}
                            alt="Guitars"
                            src="assets/images/image3.jpg"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "100%"
                        }}
                    >
                        <Typography variant='subtitle1' align="center" sx={{ fontWeight: 700 }}>
                            Talents in
                        </Typography>
                        <Typography variant='h4' align="center">
                            Singing
                        </Typography>
                        <Box
                            component='img'
                            sx={{
                                width: "100%",
                                transition: 'all 0.5s',
                                '&:hover': {
                                    transform: "scale3d(1, 1.02, 1.5)",
                                },
                            }}
                            alt="Guitars"
                            src="assets/images/image5.jpg"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "100%"
                        }}
                    >
                        <Typography variant='subtitle1' align="center" sx={{ fontWeight: 700 }}>
                            Talents in
                        </Typography>
                        <Typography variant='h4' align="center">
                            Shooting
                        </Typography>
                        <Box
                            component='img'
                            sx={{
                                width: "100%",
                                transition: 'all 0.5s',
                                '&:hover': {
                                    transform: "scale3d(1, 1.02, 1.5)",
                                },
                            }}
                            alt="Guitars"
                            src="assets/images/image3.jpg"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "100%"
                        }}
                    >
                        <Typography variant='subtitle1' align="center" sx={{ fontWeight: 700 }}>
                            Talents in
                        </Typography>
                        <Typography variant='h4' align="center">
                            Production
                        </Typography>
                        <Box
                            component='img'
                            sx={{
                                width: "100%",
                                transition: 'all 0.5s',
                                '&:hover': {
                                    transform: "scale3d(1, 1.02, 1.5)",
                                },
                            }}
                            alt="Guitars"
                            src="assets/images/image5.jpg"
                        />
                    </Box>
                </Grid>
            </Grid>

            <Box
                component="section"
                sx={{ display: 'flex', bgcolor: 'primary.main', overflow: 'hidden' }}
            >
                <Container
                    sx={{
                        mt: 10,
                        mb: 15,
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        component="img"
                        src="assets/images/curvyLines.png"
                        alt="curvy lines"
                        sx={{
                            pointerEvents: 'none',
                            position: 'absolute',
                            top: -180,
                            opacity: 0.7,
                        }}
                    />
                    <Typography variant='h3' align="center" sx={{ color: "white" }}>
                        Partnerships
                    </Typography>
                    <Divider
                        variant="inset"
                        sx={{
                            mt: 2,
                            width: "140px",
                            mx: "auto",
                            borderWidth: 1.5
                        }}
                    />
                    <Typography
                        variant='body1'
                        align="center"
                        sx={{
                            mt: 4,
                            lineHeight: 1.8,
                            color: "white"
                        }}
                    >
                        Collaborate with leading technology providers to integrate our solutions enhance  <br />
                        interoperability, and deliver superior value to our customers. with resellers, <br />
                        distributors, and channel partners to expand our market presence.
                    </Typography>
                    <Typography
                        variant='body1'
                        align="center"
                        sx={{
                            mt: 4,
                            lineHeight: 1.8,
                            color: "white"
                        }}
                    >
                        Partner with service providers, consultants, and system integrators to offer   <br />
                        comprehensive solutions, implementation services, and support.
                    </Typography>
                </Container>
            </Box>
            <Grid container alignItems="center" justifyContent="center" sx={{ mt: 0 }}>
                <Grid item xs={3} sm={3} md={3} lg={2} xl={2}>
                    <Box
                        component='img'
                        sx={{
                            width: "100%",
                            transition: 'all 0.5s',
                            '&:hover': {
                                transform: "scale3d(1.15, 1.15, 1)"
                            },
                        }}
                        alt="Guitars"
                        src="assets/images/coca-cola.png"
                    />
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={2} xl={2}>
                    <Box
                        component='img'
                        sx={{
                            width: "100%",
                            transition: 'all 0.5s',
                            '&:hover': {
                                transform: "scale3d(1.15, 1.15, 1)"
                            },
                        }}
                        alt="Guitars"
                        src="assets/images/crdb.png"
                    />
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={2} xl={2}>
                    <Box
                        component='img'
                        sx={{
                            width: "100%",
                            transition: 'all 0.5s',
                            '&:hover': {
                                transform: "scale3d(1.15, 1.15, 1)"
                            },
                        }}
                        alt="Guitars"
                        src="assets/images/vodacom.png"
                    />
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={2} xl={2}>
                    <Box
                        component='img'
                        sx={{
                            width: "100%",
                            transition: 'all 0.5s',
                            '&:hover': {
                                transform: "scale3d(1.15, 1.15, 1)"
                            },
                        }}
                        alt="Guitars"
                        src="assets/images/toyota.png"
                    />
                </Grid>
            </Grid>

            <Footer />
        </>
    )
}

export default Home