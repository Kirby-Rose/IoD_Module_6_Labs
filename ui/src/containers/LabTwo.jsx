import { Box, Typography } from "@mui/material";
import BigCats from "../components/BigCats";

export const cats = [
  {
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    imageSrc: "../src/assets/images/cheetah.jpg",
  },
  {
    name: "Cougar",
    latinName: "Puma concolor",
    imageSrc: "../src/assets/images/cougar.jpg",
  },
  {
    name: "Jaguar",
    latinName: "Panthera onca",
    imageSrc: "../src/assets/images/panther.jpg",
  },
  {
    name: "Leopard",
    latinName: "Panthera pardus",
    imageSrc: "../src/assets/images/leopard.jpg",
  },
  {
    name: "Lion",
    latinName: "Panthera leo",
    imageSrc: "../src/assets/images/lion.jpg",
  },
  {
    name: "Snow leopard",
    latinName: "Panthera uncia",
    imageSrc: "../src/assets/images/snow_leopard.jpg",
  },
  {
    name: "Tiger",
    latinName: "Panthera tigris",
    imageSrc: "../src/assets/images/tiger.jpg",
  },
];

const LabTwo = () => {
  //showing a fetach

  return (
    <Box>
      <Box>
        <Typography variant="h4">Lab Two Content</Typography>
      </Box>

      <Box>
        <Typography variant="h6">Empty data</Typography>
        <BigCats />
      </Box>

      <Box>
        <Typography variant="h6">With data</Typography>
        <BigCats data={cats} />
      </Box>
    </Box>
  );
};

export default LabTwo;
