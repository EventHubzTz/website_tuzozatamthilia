import React from 'react'
import { Box } from '@mui/material'

function TourismVideo() {

    return (
        <Box
            sx={{
                width: "100vw",
                height: "100vh"
            }}
        >
            <video
                width="100%"
                height="100%"
                autoPlay
                muted
                loop
                style={{
                    objectFit: "cover"
                }}
            >
                <source src="assets/videos/tourism.mp4" type="video/mp4" />
            </video>
        </Box>
    )
}

export default TourismVideo