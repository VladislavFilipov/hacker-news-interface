import { Theme } from "@mui/material";
import MuiContainer, { ContainerProps } from "@mui/material/Container";
import { css, styled } from "@mui/material/styles";

export const Container = styled(MuiContainer)<ContainerProps>(
  ({ theme }: { theme: Theme }) => ({
    marginTop: theme.spacing(2)
  })
);
