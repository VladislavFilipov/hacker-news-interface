import {
  Paper,
  PaperProps,
  Typography,
  TypographyProps,
  Box,
  BoxProps,
  Skeleton,
  SkeletonProps
} from "@mui/material";
import { css, styled } from "@mui/system";

import Link, { TLinkProps } from "@src/components/Link/Link";

const Title = styled(Box)<BoxProps>(
  ({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacing(2)};
    margin-bottom: ${theme.spacing(2)};

    .MuiTypography-root {
      font-weight: bold;
    }

    .MuiButton-root {
      min-width: max-content;
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
