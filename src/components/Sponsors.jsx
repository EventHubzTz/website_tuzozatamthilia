import React from "react";
import { Box, Grid } from "@mui/material";

export const lightSponsorsLogo = [
  {
    image: "assets/images/Nembo-ya-Taifa.png",
    url: "https://www.michezo.go.tz",
  },
  // {
  //   image: "assets/images/SPONSOR SQ02.png",
  //   url: "https://www.basata.go.tz",
  // },
  // {
  //   image: "assets/images/SPONSOR SQ03.png",
  //   url: "https://www.mtv.com",
  // },
  {
    image: "assets/images/TTT-Logo.png",
    url: "https://tuzozatamthilia.info",
  },
];

export const darkSponsorsLogo = [
  
  // {
  //   image: "assets/images/BET GOLD004.png",
  //   url: "https://www.bet.com",
  // },
  // {
  //   image: "assets/images/BASATA GOLD004.png",
  //   url: "https://www.basata.go.tz",
  // },
  {
    image: "assets/images/Nembo-ya-Taifa2.png",
    url: "https://www.michezo.go.tz",
  },
  {
    image: "assets/images/TTT-Logo.png",
    url: "https://tuzozatamthilia.info",
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
          <Grid item key={index} xs={2} sm={1.5} md={1.5} lg={1} xl={1}>
            <a href={item.url} target="_blank" rel="noreferrer">
              <Box
                component="img"
                sx={{
                  width: "100%",
                  height: "auto", // Ensure the image maintains its aspect ratio
                  transition: "all 0.5s",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.3)", // Increase the scaling on hover for a bigger effect
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
  

  // return (
  //   <Grid
  //     container
  //     spacing={{ xs: 1.5, sm: 1.5, md: 3 }}
  //     alignItems="center"
  //     justifyContent="center"
  //     sx={{
  //       backgroundColor: "common.black",
  //       opacity: { xs: 1, sm: 0, md: 0.8 },
  //     }}
  //   >
  //     {sponsors.map((item, index) => {
  //       return (
  //         <Grid item key={index} xs={1.5} sm={0.8} md={0.8} lg={0.5} xl={0.5}>
  //           <a href={item.url} target="_blank" rel="noreferrer">
  //             <Box
  //               component="img"
  //               sx={{
  //                 width: "100%",
  //                 transition: "all 0.5s",
  //                 cursor: "pointer",
  //                 "&:hover": {
  //                   transform: "scale3d(1.15, 1.15, 1)",
  //                 },
  //               }}
  //               alt="Guitars"
  //               src={item.image}
  //             onMouseEnter={() => handleMouseEnter(index)}
  //             onMouseLeave={() => handleMouseLeave(index)}
  //             />
  //           </a>
  //         </Grid>
  //       );
  //     })}
  //   </Grid>
  // );
}

export default Sponsors;
