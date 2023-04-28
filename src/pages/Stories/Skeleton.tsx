import { FC } from "react";

import Box from "@mui/material/Box";

import StoryCard from "@src/components/StoryCard/StoryCard.styles";

const StoriesListSkeleton: FC = () => {
  return (
    <Box>
      {Array(10)
        .fill(true)
        .map((_, index) => (
          <StoryCard.Skeleton key={index} variant="rounded" />
        ))}
    </Box>
  );
};

export default StoriesListSkeleton;
