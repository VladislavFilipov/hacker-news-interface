import { FC } from "react";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const StoryCardSkeleton: FC = () => {
  return (
    <Box>
      {Array(10)
        .fill(true)
        .map(() => (
          <Skeleton />
        ))}
    </Box>
  );
};

export { StoryCardSkeleton };
