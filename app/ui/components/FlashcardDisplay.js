import { Box, Typography } from "@mui/material";

export default function FlashcardDisplay({ categorizedFlashcards }) {
  return (
    <Box>
      {Object.keys(categorizedFlashcards).map((topic) => (
        <Box key={topic} sx={{ mb: 4 }}>
          <Typography variant="h5">{topic}</Typography>
          <Box>
            {categorizedFlashcards[topic].map((flashcard, index) => (
              <Box key={index} sx={{ mb: 2, p: 2, border: "1px solid #ccc" }}>
                <Typography variant="h6">{flashcard.front}</Typography>
                <Typography>{flashcard.back}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
