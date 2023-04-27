import {
  Paper,
  PaperProps,
  Typography,
  TypographyProps,
  Box,
  BoxProps
} from "@mui/material";
import { css, styled } from "@mui/system";

import Link, { TLinkProps } from "@src/components/Link/Link";

const Title = styled(Box)<BoxProps>(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${theme.spacing(2)};

    .MuiTypography-root {
      font-weight: 600;
    }
  `
);

const Loader = styled(Box)<BoxProps>(
  () => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
  `
);

export default { Title, Loader };
