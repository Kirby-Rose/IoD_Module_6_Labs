import { Box, Typography, Button } from "@mui/material";
import AddCatForm from "../components/AddCatForm";
import BigCats from "../components/BigCats";
import { cats } from "./LabTwo";
import { useState } from "react";

const LabFive = () => {
  const [data, setData] = useState(cats);

  const updateCatsList = (newObject) => {
    const hasMatch = data.some(
      (obj) =>
        newObject.name === obj.name && newObject.latinName === obj.latinName
    );
    if (!hasMatch) {
      const copyOfCurrentData = [...data];
      copyOfCurrentData.push(newObject);
      setData(copyOfCurrentData);
    }
  };

  return (
    <Box variant="h4">
      {"Lab Five Content"}

      <AddCatForm submitFunc={updateCatsList} />

      <BigCats data={data} />

      <Button
        onClick={() => {
          updateCatsList({
            name: "Loki",
            latinName: "pain-in-the-ass",
            imgSource: "",
          });
        }}
      >
        Test
      </Button>
    </Box>
  );
};

export default LabFive;
