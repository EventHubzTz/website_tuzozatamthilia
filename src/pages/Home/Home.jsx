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
                sx={{ display: 'flex', bgcolor: '#9E7003', overflow: 'hidden' }}
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
                    <Typography variant='h3' align="center">
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
                            lineHeight: 1.8
                        }}
                    >
                        Known as the land of a thousand hills, Rwanda’s stunning scenery and warm, friendly <br />
                        people offer unique experiences in one of the most remarkable countries in the <br />
                        world. It is blessed with extraordinary biodiversity, with incredible wildlife living <br />
                        throughout its volcanoes, montane rainforest and sweeping plains.
                    </Typography>
                    <Typography
                        variant='body1'
                        align="center"
                        sx={{
                            mt: 4,
                            lineHeight: 1.8
                        }}
                    >
                        Travellers come from far and wide to catch a glimpse of the magnificent gorillas, yet  <br />
                        there is so much more to see and experience.
                    </Typography>
                </Container>
            </Box>
            <Grid container sx={{ mt: 0 }}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Box
                        component='img'
                        sx={{
                            width: "100%"
                        }}
                        alt="Guitars"
                        src="assets/images/image1.jpg"
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
                                        Known as the land of a thousand hills, Rwanda’s stunning scenery and warm, friendly <br />
                                        people offer unique experiences in one of the most remarkable countries in the <br />
                                        world. It is blessed with extraordinary biodiversity, with incredible wildlife living <br />
                                        throughout its volcanoes, montane rainforest and sweeping plains.
                                    </Typography>
                                    <Typography
                                        variant='body1'
                                        align="center"
                                        sx={{
                                            mt: 4,
                                            lineHeight: 1.8
                                        }}
                                    >
                                        Travellers come from far and wide to catch a glimpse of the magnificent gorillas, yet  <br />
                                        there is so much more to see and experience.
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
                                        Known as the land of a thousand hills, Rwanda’s stunning scenery and warm, friendly <br />
                                        people offer unique experiences in one of the most remarkable countries in the <br />
                                        world. It is blessed with extraordinary biodiversity, with incredible wildlife living <br />
                                        throughout its volcanoes, montane rainforest and sweeping plains.
                                    </Typography>
                                    <Typography
                                        variant='body1'
                                        align="center"
                                        sx={{
                                            mt: 4,
                                            lineHeight: 1.8
                                        }}
                                    >
                                        Travellers come from far and wide to catch a glimpse of the magnificent gorillas, yet  <br />
                                        there is so much more to see and experience.
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
                                        Known as the land of a thousand hills, Rwanda’s stunning scenery and warm, friendly <br />
                                        people offer unique experiences in one of the most remarkable countries in the <br />
                                        world. It is blessed with extraordinary biodiversity, with incredible wildlife living <br />
                                        throughout its volcanoes, montane rainforest and sweeping plains.
                                    </Typography>
                                    <Typography
                                        variant='body1'
                                        align="center"
                                        sx={{
                                            mt: 4,
                                            lineHeight: 1.8
                                        }}
                                    >
                                        Travellers come from far and wide to catch a glimpse of the magnificent gorillas, yet  <br />
                                        there is so much more to see and experience.
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
                                        Known as the land of a thousand hills, Rwanda’s stunning scenery and warm, friendly <br />
                                        people offer unique experiences in one of the most remarkable countries in the <br />
                                        world. It is blessed with extraordinary biodiversity, with incredible wildlife living <br />
                                        throughout its volcanoes, montane rainforest and sweeping plains.
                                    </Typography>
                                    <Typography
                                        variant='body1'
                                        align="center"
                                        sx={{
                                            mt: 4,
                                            lineHeight: 1.8
                                        }}
                                    >
                                        Travellers come from far and wide to catch a glimpse of the magnificent gorillas, yet  <br />
                                        there is so much more to see and experience.
                                    </Typography>
                                </Box>
                            </Carousel>
                        </Box>
                    </Box>
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
                                width: "100%"
                            }}
                            alt="Guitars"
                            src="assets/images/image4.jpg"
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
                                width: "100%"
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
                                width: "100%"
                            }}
                            alt="Guitars"
                            src="assets/images/image4.jpg"
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
                                width: "100%"
                            }}
                            alt="Guitars"
                            src="assets/images/image5.jpg"
                        />
                    </Box>
                </Grid>
            </Grid>

            <Box
                component="section"
                sx={{ display: 'flex', bgcolor: '#9E7003', overflow: 'hidden' }}
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
                    <Typography variant='h3' align="center">
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
                            lineHeight: 1.8
                        }}
                    >
                        Known as the land of a thousand hills, Rwanda’s stunning scenery and warm, friendly <br />
                        people offer unique experiences in one of the most remarkable countries in the <br />
                        world. It is blessed with extraordinary biodiversity, with incredible wildlife living <br />
                        throughout its volcanoes, montane rainforest and sweeping plains.
                    </Typography>
                    <Typography
                        variant='body1'
                        align="center"
                        sx={{
                            mt: 4,
                            lineHeight: 1.8
                        }}
                    >
                        Travellers come from far and wide to catch a glimpse of the magnificent gorillas, yet  <br />
                        there is so much more to see and experience.
                    </Typography>
                </Container>
            </Box>
            <Grid container sx={{ mt: 0 }}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Box
                        component='img'
                        sx={{
                            width: "100%"
                        }}
                        alt="Guitars"
                        src="assets/images/image1.jpg"
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
                                        Known as the land of a thousand hills, Rwanda’s stunning scenery and warm, friendly <br />
                                        people offer unique experiences in one of the most remarkable countries in the <br />
                                        world. It is blessed with extraordinary biodiversity, with incredible wildlife living <br />
                                        throughout its volcanoes, montane rainforest and sweeping plains.
                                    </Typography>
                                    <Typography
                                        variant='body1'
                                        align="center"
                                        sx={{
                                            mt: 4,
                                            lineHeight: 1.8
                                        }}
                                    >
                                        Travellers come from far and wide to catch a glimpse of the magnificent gorillas, yet  <br />
                                        there is so much more to see and experience.
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
                                        Known as the land of a thousand hills, Rwanda’s stunning scenery and warm, friendly <br />
                                        people offer unique experiences in one of the most remarkable countries in the <br />
                                        world. It is blessed with extraordinary biodiversity, with incredible wildlife living <br />
                                        throughout its volcanoes, montane rainforest and sweeping plains.
                                    </Typography>
                                    <Typography
                                        variant='body1'
                                        align="center"
                                        sx={{
                                            mt: 4,
                                            lineHeight: 1.8
                                        }}
                                    >
                                        Travellers come from far and wide to catch a glimpse of the magnificent gorillas, yet  <br />
                                        there is so much more to see and experience.
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
                                        Known as the land of a thousand hills, Rwanda’s stunning scenery and warm, friendly <br />
                                        people offer unique experiences in one of the most remarkable countries in the <br />
                                        world. It is blessed with extraordinary biodiversity, with incredible wildlife living <br />
                                        throughout its volcanoes, montane rainforest and sweeping plains.
                                    </Typography>
                                    <Typography
                                        variant='body1'
                                        align="center"
                                        sx={{
                                            mt: 4,
                                            lineHeight: 1.8
                                        }}
                                    >
                                        Travellers come from far and wide to catch a glimpse of the magnificent gorillas, yet  <br />
                                        there is so much more to see and experience.
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
                                        Known as the land of a thousand hills, Rwanda’s stunning scenery and warm, friendly <br />
                                        people offer unique experiences in one of the most remarkable countries in the <br />
                                        world. It is blessed with extraordinary biodiversity, with incredible wildlife living <br />
                                        throughout its volcanoes, montane rainforest and sweeping plains.
                                    </Typography>
                                    <Typography
                                        variant='body1'
                                        align="center"
                                        sx={{
                                            mt: 4,
                                            lineHeight: 1.8
                                        }}
                                    >
                                        Travellers come from far and wide to catch a glimpse of the magnificent gorillas, yet  <br />
                                        there is so much more to see and experience.
                                    </Typography>
                                </Box>
                            </Carousel>
                        </Box>
                    </Box>
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
                                width: "100%"
                            }}
                            alt="Guitars"
                            src="assets/images/image4.jpg"
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
                                width: "100%"
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
                                width: "100%"
                            }}
                            alt="Guitars"
                            src="assets/images/image4.jpg"
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
                                width: "100%"
                            }}
                            alt="Guitars"
                            src="assets/images/image5.jpg"
                        />
                    </Box>
                </Grid>
            </Grid>


            <Box
                component="section"
                sx={{ display: 'flex', bgcolor: '#9E7003', overflow: 'hidden' }}
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
                    <Typography variant='h3' align="center">
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
                            lineHeight: 1.8
                        }}
                    >
                        Known as the land of a thousand hills, Rwanda’s stunning scenery and warm, friendly <br />
                        people offer unique experiences in one of the most remarkable countries in the <br />
                        world. It is blessed with extraordinary biodiversity, with incredible wildlife living <br />
                        throughout its volcanoes, montane rainforest and sweeping plains.
                    </Typography>
                    <Typography
                        variant='body1'
                        align="center"
                        sx={{
                            mt: 4,
                            lineHeight: 1.8
                        }}
                    >
                        Travellers come from far and wide to catch a glimpse of the magnificent gorillas, yet  <br />
                        there is so much more to see and experience.
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
                            Highlights
                        </Typography>
                        <Typography variant='h4' align="center">
                            Artists
                        </Typography>
                        <Box
                            component='img'
                            sx={{
                                width: "100%"
                            }}
                            alt="Guitars"
                            src="assets/images/image4.jpg"
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
                                width: "100%"
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
                                width: "100%"
                            }}
                            alt="Guitars"
                            src="assets/images/image4.jpg"
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
                                width: "100%"
                            }}
                            alt="Guitars"
                            src="assets/images/image5.jpg"
                        />
                    </Box>
                </Grid>
            </Grid>

            <Box
                component="section"
                sx={{ display: 'flex', bgcolor: '#9E7003', overflow: 'hidden' }}
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
                    <Typography variant='h3' align="center">
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
                            lineHeight: 1.8
                        }}
                    >
                        Known as the land of a thousand hills, Rwanda’s stunning scenery and warm, friendly <br />
                        people offer unique experiences in one of the most remarkable countries in the <br />
                        world. It is blessed with extraordinary biodiversity, with incredible wildlife living <br />
                        throughout its volcanoes, montane rainforest and sweeping plains.
                    </Typography>
                    <Typography
                        variant='body1'
                        align="center"
                        sx={{
                            mt: 4,
                            lineHeight: 1.8
                        }}
                    >
                        Travellers come from far and wide to catch a glimpse of the magnificent gorillas, yet  <br />
                        there is so much more to see and experience.
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
                            Highlights
                        </Typography>
                        <Typography variant='h4' align="center">
                            Artists
                        </Typography>
                        <Box
                            component='img'
                            sx={{
                                width: "100%"
                            }}
                            alt="Guitars"
                            src="assets/images/image4.jpg"
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
                                width: "100%"
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
                                width: "100%"
                            }}
                            alt="Guitars"
                            src="assets/images/image4.jpg"
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
                                width: "100%"
                            }}
                            alt="Guitars"
                            src="assets/images/image5.jpg"
                        />
                    </Box>
                </Grid>
            </Grid>

            <Footer />
        </>
    )
}

export default Home