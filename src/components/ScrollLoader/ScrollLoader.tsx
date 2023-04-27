import { FC, forwardRef, HTMLAttributes } from "react";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import Loader from "./ScrollLoader.styles";

const ScrollLoader = forwardRef<
  HTMLDivElement,
  { isFetchingNextPage: boolean } & HTMLAttributes<HTMLDivElement>
>(({ isFetchingNextPage }, ref) => {
  return (
    <Loader ref={ref}>{isFetchingNextPage && <CircularProgress />}</Loader>
  );
});
ScrollLoader.displayName = "ScrollLoader";

export default ScrollLoader;
