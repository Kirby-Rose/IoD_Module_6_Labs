import {
  Typography,
  Box,
  ToggleButtonGroup,
  ToggleButton,
  TextField,
} from "@mui/material";
import BigCats from "../components/BigCats";
import { useState, useEffect } from "react";

const LabFour = () => {
  const filters = ["asc", "desc"];
  const [filterType, setFilterType] = useState("asc");
  const [searchText, setSearchText] = useState("");
  //showing a fetach
  const cats = [
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
    {
      name: "Cheetah",
      latinName: "Acinonyx jubatus",
      imageSrc: "../src/assets/images/cheetah.jpg",
    },
  ];

  useEffect(() => {
    console.log("filtertype", filterType);
  }, [filterType]);

  function changeFilter() {
    const updatedValue = filterType === filters[0] ? filters[1] : filters[0];
    setFilterType(updatedValue);
  }

  const dataHandlingFunction = () => {
    const sortedCats = [...cats];

    if (filterType === filters[0]) {
      sortedCats.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (filterType === filters[1]) {
      sortedCats.sort((a, b) => b.name.localeCompare(a.name));
    }
    if (searchText) {
      console.log("here", searchText);
      sortedCats.filter((cat) => {
        return cat.name.toUpperCase().includes(searchText.toUpperCase());
      });
      return sortedCats;
    }
  };

  const searchFieldHandler = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <Box>
      <Typography variant="h4">Lab Four Content</Typography>

      <TextField
        id="standard-basic"
        label="Search Cats"
        variant="standard"
        onChange={searchFieldHandler}
      />

      <ToggleButtonGroup
        value={filterType}
        exclusive
        onChange={() => changeFilter()}
        aria-label="update filter type"
      >
        <ToggleButton value={filters[0]} aria-label="Alphabetised">
          <Typography>ASC</Typography>
        </ToggleButton>
        <ToggleButton value={filters[1]} aria-label="Backwards">
          <Typography>DESC</Typography>
        </ToggleButton>
      </ToggleButtonGroup>

      <BigCats data={dataHandlingFunction()} />
    </Box>
  );
};

export default LabFour;
