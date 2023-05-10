import React from "react";

import { BallCanvas } from "./canvas/Ball";
import { Box } from "@mui/material";
import { html2, css2 } from "@/public/assets";
import Image from "next/image";

// import html2 from "../public/assets/html2.jpg";
// import css2 from "../public/assets/css2.jpg";
// import {
//   css,
//   docker,
//   figma,
//   git,
//   html,
//   // javascript,
//   mongodb,
//   nodejs,
//   reactjs,
// } from "@/public/assets";

const Tech = () => {
  const technologies = [
    {
      name: "HTML 5",
      icon: "<Image src={html2} />",
    },
    {
      name: "CSS 3",
      icon: "<Image src={css2} />",
    },
    // {
    //   name: "JavaScript",
    //   icon: javascript,
    // },
    // {
    //   name: "React JS",
    //   icon: reactjs,
    // },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    // {
    //   name: "Material UI",
    //   icon: tailwind,
    // },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "Firebase",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "git",
    //   icon: git,
    // },
    // {
    //   name: "Adobe XD",
    //   icon: figma,
    // },
    // {
    //   name: "Bootstrap",
    //   icon: docker,
    // },
  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "10em",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {technologies.map((technology) => (
          <Box sx={{ width: "100%", height: "100%" }} key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </Box>
        ))}
      </Box>
    </>
  );
};
export default Tech;
