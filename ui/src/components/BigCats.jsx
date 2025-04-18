import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";
import CatAvatarListItem from "./CatAvatarListItem";

const BigCats = ({ data }) => {
  //Var

  // Func
  const catsDisplayHandler = () => {
    if (!data) {
      return <Typography> No Data Found </Typography>;
    }
    return data?.map((cat) => (
      <CatAvatarListItem
        key={cat.latinName}
        name={cat.name}
        latinName={cat.latinName}
        imageSrc={cat.imageSrc}
      />
    ));
  };

  // return

  return <List>{catsDisplayHandler()}</List>;
};

export default BigCats;
