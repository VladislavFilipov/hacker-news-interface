import { Box, BoxProps } from "@mui/material";
import MuiContainer, { ContainerProps } from "@mui/material/Container";
import { css, styled } from "@mui/material/styles";

const Container = styled(MuiContainer)<ContainerProps>(
  ({ theme }) => css`
    margin-top: ${theme.spacing(2)};
  `
);

const SuspenseFallback = styled(Box)<BoxProps>(
  () => css`
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `
);

export default { Container, SuspenseFallback };
