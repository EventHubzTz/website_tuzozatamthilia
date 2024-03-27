import React from "react";
import { Box, Grid } from "@mui/material";

export const lightSponsorsLogo = [
  {
    image: "assets/images/MTV GOL001.png",
    url: "https://www.mtv.com",
  },
  {
    image: "assets/images/BET GOLD001.png",
    url: "https://www.bet.com",
  },
  {
    image: "assets/images/DELOITTE TOUCHE GOLD001.png",
    url: "https://www.deloitte.com/tz/en/offices/tanzania-offices/dar-es-salaam.html",
  },
  {
    image: "assets/images/BASATA GOLD001.png",
    url: "https://www.basata.go.tz",
  },
  {
    image: "assets/images/TANZANIA GOLD001.png",
    url: "https://www.michezo.go.tz",
  },
];

export const darkSponsorsLogo = [
  {
    image: "assets/images/MTV GOL004.png",
    url: "https://www.mtv.com",
  },
  {
    image: "assets/images/BET GOLD004.png",
    url: "https://www.bet.com",
  },
  {
    image: "assets/images/DELOITTE TOUCHE GOLD004.png",
    url: "https://www.deloitte.com/tz/en/offices/tanzania-offices/dar-es-salaam.html",
  },
  {
    image: "assets/images/BASATA GOLD004.png",
    url: "https://www.basata.go.tz",
  },
  {
    image: "assets/images/TANZANIA GOLD004.png",
    url: "https://www.michezo.go.tz",
  },
];

function Sponsors() {
  const [sponsors, setSponsors] = React.useState(lightSponsorsLogo);

  const handleMouseEnter = (index) => {
    const updatedSponsors = sponsors.map((sponsor, i) =>
      i === index ? { ...sponsor, image: darkSponsorsLogo[i].image } : sponsor
    );
    setSponsors(updatedSponsors);
  };

  const handleMouseLeave = (index) => {
    const updatedSponsors = sponsors.map((sponsor, i) =>
      i === index ? { ...sponsor, image: lightSponsorsLogo[i].image } : sponsor
    );
    setSponsors(updatedSponsors);
  };

  return (
    <Grid
      container
      spacing={{ xs: 1.5, sm: 1.5, md: 3 }}
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: "common.black",
        opacity: { xs: 1, sm: 0, md: 0.8 },
      }}
    >
      {sponsors.map((item, index) => {
        return (
          <Grid item key={index} xs={1.5} sm={0.8} md={0.8} lg={0.5} xl={0.5}>
            <a href={item.url} target="_blank" rel="noreferrer">
              <Box
                component="img"
                sx={{
                  width: "100%",
                  transition: "all 0.5s",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale3d(1.15, 1.15, 1)",
                  },
                }}
                alt="Guitars"
                src={item.image}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              />
            </a>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Sponsors;
