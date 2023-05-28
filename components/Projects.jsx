import React from "react";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { Box } from "@mui/system";
// import { styles } from "../styles";
import { github } from "../public/assets/github.png";
// import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
// import { carrent } from "@/public/assets/carrent.png";
import austin from "../public/austin.png";
import meribilty from "../public/meribilty.png";
import komplai from "../public/komplai.png";
import fues from "../public/fues.png";

const Works = () => {
  const projects = [
    {
      name: "MeriBilty",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "#2f80ed",
        },
        {
          name: "mongodb",
          color: "#38ef7d",
        },
        {
          name: "Material Ui",
          color: "#ec008c",
        },
      ],
      image: meribilty,
      source_code_link: "https://web.meribilty.com/",
    },
    {
      name: "Rodio App",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "React js",
          color: "#2f80ed",
        },
        {
          name: "Node js",
          color: "#38ef7d",
        },
        {
          name: "Tailwind CSS",
          color: "#ec008c",
        },
      ],
      image: fues,
      source_code_link: "https://web.meribilty.com/",
    },
    {
      name: "Austin Trim ",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "Vue js",
          color: "#2f80ed",
        },
        {
          name: "Fire Base",
          color: "#38ef7d",
        },
        {
          name: "Material Ui",
          color: "#ec008c",
        },
      ],
      image: austin,
      source_code_link: "studio.austintrim.co",
    },
    {
      name: "Komplai",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "Next js",
          color: "#2f80ed",
        },
        {
          name: "Three js",
          color: "#38ef7d",
        },
        {
          name: "Material Ui",
          color: "#ec008c",
        },
      ],
      image: komplai,
      source_code_link: "komplai-next.vercel.app",
    },
  ];
  const ProjectCard = ({ index, name, description, tags, image }) => {
    return (
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "sans-serif",
          // animation: `${fadeIn("up", "spring", index * 0.5, 0.75)} 0.5s ease`,
        }}
      >
        <div
          style={{
            // position: "relative",
            width: "100%",
            height: "230px",
            padding: "1rem",
          }}
        >
          <Image
            src={image}
            alt="project_image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "16px",
            }}
          />
        </div>

        <div style={{ marginTop: "0.5rem", padding: "1rem" }}>
          <h3
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "2rem",
              fontFamily: "sans-serif",
            }}
          >
            {name}
          </h3>
          <p
            style={{
              marginTop: "0.5rem",
              color: "secondary",
              fontSize: "1rem",
            }}
          >
            {description}
          </p>
        </div>

        <div
          style={{
            marginBottom: "0.75rem",
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            fontSize: "1rem",
            textAlign: "left",
            fontFamily: "poppins",
          }}
        >
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              style={{
                fontSize: "1rem",
                color: `${tag.color}`,
                textAlign: "left",
              }}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </motion.div>
    );
  };
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          textAlign: "left",
          color: "white",
          fontWeight: "900",
          fontSize: "4rem",
          marginY: "3rem",
        }}
      >
        Projects.
      </Typography>

      <Box sx={{ width: "100%", display: "flex" }}>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          style={{
            // mt: 3,
            color: "#888",
            fontSize: "1.5rem",
            // maxWidth: "3xl",
            lineHeight: "30px",
            fontFamily: "sans-serif",
          }}
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </Box>

      <Box sx={{ marginTop: "3rem" }}>
        <Grid
          container
          gap={2}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          {projects.map((project, index) => {
            return (
              <Grid
                item
                lg={3}
                md={4}
                sx={{
                  backgroundColor: "#151030",
                  borderRadius: "1rem",
                  padding: "0px",
                }}
              >
                <ProjectCard
                  key={`project-${index}`}
                  index={index}
                  name={project.name}
                  description={project.description}
                  tags={project.tags}
                  image={project.image}
                  source_code_link={project.source_code_link}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Works;
