import { FC } from "react";

import Box from "@mui/material/Box";

import S from "./StoryPage.styles";

const StoryPageSkeleton: FC = () => {
  return (
    <Box>
      <S.Skeleton.Title variant="rounded" />
      <S.Skeleton.Info variant="rounded" />
      <S.Skeleton.Link variant="rounded" />
      <S.Skeleton.CommentsTitle variant="rounded" />
      {Array(5)
        .fill(true)
        .map((_, index) => (
          <S.Skeleton.Comment key={index} variant="rounded" />
        ))}
    </Box>
  );
};

export default StoryPageSkeleton;
