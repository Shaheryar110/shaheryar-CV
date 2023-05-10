import React from "react";

import { BallCanvas } from "./canvas";
import { Box } from "@mui/material";

const Tech = () => {
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Material UI",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Firebase",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Adobe XD",
      icon: figma,
    },
    {
      name: "Bootstrap",
      icon: docker,
    },
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
