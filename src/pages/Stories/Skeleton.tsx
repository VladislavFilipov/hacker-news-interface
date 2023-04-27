import { FC } from "react";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

import StoryCard from "@src/components/StoryCard/StoryCard.styles";

const StoriesListSkeleton: FC = () => {
  return (
    <Box>
      {Array(10)
        .fill(true)
        .map(() => (
          <StoryCard.Skeleton variant="rounded" />
        ))}
    </Box>
  );
};

export default StoriesListSkeleton;
