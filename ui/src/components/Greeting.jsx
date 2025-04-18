import { Typography, Box } from "@mui/material";

const Greeting = ({ name }) => {
  const greetingHandler = () => {
    return name ? (
      <Typography>Hello {name} </Typography>
    ) : (
      <Typography>Welcome</Typography>
    );
  };
  return <Box>{greetingHandler()}</Box>;
};

export default Greeting;
