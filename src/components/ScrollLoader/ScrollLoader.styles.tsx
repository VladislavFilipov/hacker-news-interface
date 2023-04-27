import { Box, BoxProps } from "@mui/material";
import { css, styled } from "@mui/system";

const ScrollLoader = styled(Box)<BoxProps>(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${theme.spacing(10)};
  `
);

export default ScrollLoader;
