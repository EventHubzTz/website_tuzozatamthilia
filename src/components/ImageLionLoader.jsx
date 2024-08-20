import React from 'react'
import { Box } from '@mui/material'

function ImageLionLoader() {

    return (
        <Box
            sx={{
                width: "100vw",
                height: "100vh",
                background: 'black',
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Box
                component='img'
                sx={{
                    width: { xs: "90%", sm: "90%", md: "50vh" },
                    height: { xs: "70vh", sm: "70vh", md: "50vh" },
                    objectFit: "cover"
                }}
                alt="Logo"
                src="assets/gif/TTT_Logo_GIF_2.gif"
            />
        </Box>
    )
}

export default ImageLionLoader