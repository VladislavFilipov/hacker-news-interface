import { Box, BoxProps } from "@mui/material";
import { css, styled } from "@mui/system";

const Body = styled(Box)<BoxProps>(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing(2)};
    height: 70vh;

    .MuiTypography-root {
      font-weight: bold;
      &:first-child {
        color: ${theme.palette.primary.main};
      }
    }
  `
);

export default { Body };
