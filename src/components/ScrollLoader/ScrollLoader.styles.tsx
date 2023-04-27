import styled from "@emotion/styled";
import { Box, BoxProps } from "@mui/material";
import { css } from "@mui/system";

const ScrollLoader = styled(Box)<BoxProps>(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `
);

export default ScrollLoader;
