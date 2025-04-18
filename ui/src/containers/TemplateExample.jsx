import { Box } from "@mui/material";
import Card from "../components/Card";

const TemplateExample = () => {
  //var
  //func
  //Return
  return (
    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
      Template Example
      <Card
        imgSource={
          "https://mui.com/static/images/cards/contemplative-reptile.jpg"
        }
        bodyText={"Frankie the Iguana"}
      />
      <Card imgSource={""} bodyText={"Frankie the Iguana"} />
    </Box>
  );
};

export default TemplateExample;
