import { Theme } from "@mui/material";
import MuiContainer, { ContainerProps } from "@mui/material/Container";
import { css, styled } from "@mui/material/styles";

const Container = styled(MuiContainer)<ContainerProps>(
  ({ theme }: { theme: Theme }) => ({
    // marginTop: theme.mixins.toolbar
  })
);
