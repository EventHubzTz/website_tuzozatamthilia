import React from 'react'
import { Box } from '@mui/material'

function VideoLionLoader() {
    const videoRef = React.useRef(null);

    React.useEffect(() => {
        if (videoRef.current) {
            videoRef.current.currentTime = 25;
        }
    }, []);

    return (
        <Box
            sx={{
                width: "100vw",
                height: "100vh"
            }}
        >
            <video
                ref={videoRef}
                width="100%"
                height="100%"
                autoPlay
                muted
                loop
                style={{
                    objectFit: "cover"
                }}
            >
                <source src="assets/videos/lion.mp4" type="video/mp4" />
            </video>
        </Box>
    )
}

export default VideoLionLoader