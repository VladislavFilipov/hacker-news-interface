import { FC } from "react";

import CircularProgress from "@mui/material/CircularProgress";

import S from "./ScrollLoader.styles";

const ScrollLoader: FC<{ isFetchingNextPage: boolean }> = ({
  isFetchingNextPage
}) => {
  return <S.Loader>{isFetchingNextPage && <CircularProgress />}</S.Loader>;
};

export default ScrollLoader;
