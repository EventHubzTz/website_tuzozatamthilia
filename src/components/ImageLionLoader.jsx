import React from 'react'
import { Box } from '@mui/material'

function ImageLionLoader() {

    return (
        <Box
            sx={{
                width: "100vw",
                height: "100vh"
            }}
        >
            <Box
                component='img'
                sx={{
                    width: "100%",
                    height: "100vh",
                    objectFit: "cover"
                }}
                alt="Lion"
                src="assets/images/mariola-grobelska-8a7ZTFKax_I-unsplash.jpg"
            />
        </Box>
    )
}

export default ImageLionLoader