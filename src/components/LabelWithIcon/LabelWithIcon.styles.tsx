import Box, { BoxProps } from "@mui/material/Box";
import { styled, css } from "@mui/system";

const Wrap = styled(Box)<BoxProps>(
  ({ theme }) => css`
    display: flex;
    gap: ${theme.spacing(0.5)};
    align-items: center;

    & .MuiSvgIcon-root {
      font-size: medium;
      /* color: ${theme.palette.primary.main}; */
    }
  `
);

export default { Wrap };
