import { Box } from "@mui/material";
import Greeting from "../components/Greeting";

const LabOne = () => {
  return (
    <Box variant="h4">
      {" "}
      Lab One Content
      <Greeting name="Sunshine"></Greeting>
    </Box>
  );
};

export default LabOne;
