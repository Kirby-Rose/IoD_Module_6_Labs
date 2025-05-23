import { ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";

const CatAvatarListItem = ({ name, latinName, imageSrc }) => {
  return (
    <ListItem key={latinName}>
      <ListItemAvatar>
        <Avatar alt={name} src={imageSrc} />
      </ListItemAvatar>
      <ListItemText primary={name} secondary={latinName} />
    </ListItem>
  );
};

export default CatAvatarListItem;
