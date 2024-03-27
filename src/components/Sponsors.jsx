import React from 'react'
import { Box, Grid } from '@mui/material'

export const lightSponsorsLogo = [
    "assets/images/MTV GOL001.png",
    "assets/images/BET GOLD001.png",
    "assets/images/DELOITTE TOUCHE GOLD001.png",
    "assets/images/BASATA GOLD001.png",
    "assets/images/TANZANIA GOLD001.png"
];

export const darkSponsorsLogo = [
    "assets/images/MTV GOL004.png",
    "assets/images/BET GOLD004.png",
    "assets/images/DELOITTE TOUCHE GOLD004.png",
    "assets/images/BASATA GOLD004.png",
    "assets/images/TANZANIA GOLD004.png"
];

function Sponsors() {
    const [sponsors, setSponsors] = React.useState(lightSponsorsLogo);

    return (
        <Grid container spacing={{ xs: 1.5, sm: 1.5, md: 3 }} alignItems="center" justifyContent="center" sx={{ backgroundColor: 'transparent' }}>
            {sponsors.map((item, index) => {
                return (
                    <Grid item key={index} xs={1.5} sm={1.5} md={1.5} lg={0.5} xl={0.5}>
                        <Box
                            component='img'
                            sx={{
                                width: "100%",
                                transition: 'all 0.5s',
                                cursor: "pointer",
                                '&:hover': {
                                    transform: "scale3d(1.15, 1.15, 1)"
                                },
                            }}
                            alt="Guitars"
                            src={item}
                            onMouseEnter={() => {
                                const newsponsors = [...sponsors];
                                newsponsors[index] = darkSponsorsLogo[index];
                                setSponsors(newsponsors);
                            }}
                            onMouseLeave={() => {
                                const newsponsors = [...sponsors];
                                newsponsors[index] = lightSponsorsLogo[index];
                                setSponsors(newsponsors);
                            }}
                        />
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default Sponsors