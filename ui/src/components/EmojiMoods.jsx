import { Typography, Box, Button } from "@mui/material";
import { useState } from "react";

// const moods = [
//   { mood: "Happy", emojiSrc: "../src/assets/images/happy_emoji.jpg" },
//   { mood: "Angry", emojiSrc: "../src/assets/images/angry_emoji.jpg" },
//   { mood: "Happy", emojiSrc: "../src/assets/images/sad_emoji.jpg" },
// ];

const EmojiMoods = () => {
  //var state
  const moodList = ["happy", "sad", "angry"];
  const [mood, setMood] = useState(moodList[0]);

  //func
  const moodDisplayHandler = () => {
    switch (mood) {
      case moodList[0]:
        return <> 😊</>;

      case moodList[1]:
        return <>😢</>;

      default:
        return <> 😡</>;
    }
  };

  const updateMood = () => {
    setMood((prevMood) => randomMood(prevMood));
  };

  const randomMood = (currentMoodIndex) => {
    const moodListWithoutPrevious = [...moodList].filter(
      (mood) => mood !== currentMoodIndex
    );
    const moodIndexRandom = Math.floor(
      Math.random() * moodListWithoutPrevious.length
    );
    return moodListWithoutPrevious[moodIndexRandom];
  };

  //return
  return (
    <Box>
      <Typography> My emoji mood is: {moodDisplayHandler()} </Typography>
      <Button onClick={updateMood}>Change Mood</Button>
    </Box>
  );
};

export default EmojiMoods;
