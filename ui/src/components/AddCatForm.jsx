import { Typography, Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import BigCats from "./BigCats";

const AddCatForm = ({ submitFunc }) => {
  const [name, setName] = useState();
  const [latinName, setLatinName] = useState();
  const [imageSrc, setImageSrc] = useState();

  const nameHandler = (event) => {
    const value = event.target.value;
    if (value) {
      setName(value);
    }
  };

  const latinNameHandler = (event) => {
    const value = event.target.value;
    if (value) {
      setLatinName(value);
    }
  };

  const imageSourceHandler = (event) => {
    const value = event.target.value;
    if (value) {
      setImageSrc(value);
    }
  };

  const submitHandler = () => {
    if (submitFunc) {
      submitFunc({
        name,
        latinName,
        imgSource: imageSrc,
      });
    }
  };

  return (
    <Box display={"flex"} flexDirection={"column"} marginX={1} gap={1}>
      <Typography>"Hello Cat Form"</Typography>

      <TextField
        required
        label="Name"
        variant="standard"
        onChange={nameHandler}
        helperText="Required Field."
      />

      <TextField
        required
        label="Latin Name"
        variant="standard"
        onChange={latinNameHandler}
        helperText="Required Field."
      />

      <TextField
        label="Image Source"
        variant="standard"
        onChange={imageSourceHandler}
      />

      <Button variant={"outlined"} onClick={submitHandler}>
        Submit New Cat
      </Button>

      <BigCats />
    </Box>
  );
};

export default AddCatForm;
