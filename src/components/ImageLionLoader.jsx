import React from 'react'
import { Box } from '@mui/material'

function ImageLionLoader() {

    return (
        <Box
            sx={{
                width: "100vw",
                height: "100vh",
                backgroundColor: 'common.black',
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Box
                component='img'
                sx={{
                    width: "50%",
                    height: "50vh",
                    objectFit: "cover"
                }}
                alt="Lion"
                src="assets/gif/lion.gif"
            />
        </Box>
    )
}

export default ImageLionLoader