import Box, { BoxProps } from "@mui/material/Box";
import { css, styled } from "@mui/system";

const Loader = styled(Box)<BoxProps>(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${theme.spacing(10)};
  `
);

export default { Loader };
