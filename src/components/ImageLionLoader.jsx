import React from 'react'
import { Box } from '@mui/material'
import Lottie from 'lottie-react'
import loaderAnimation from "../animations/loader.json"

function ImageLionLoader() {

    return (
        <Box
            sx={{
                width: "100vw",
            }}
        >
            <Lottie
                animationData={loaderAnimation}
                loop={true}
                size={5}
            />
        </Box>
    )
}

export default ImageLionLoader