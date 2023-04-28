import Box, { BoxProps } from "@mui/material/Box";
import Paper, { PaperProps } from "@mui/material/Paper";
import MuiSkeleton, { SkeletonProps } from "@mui/material/Skeleton";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { styled, css } from "@mui/system";

const Wrap = styled(Paper)<PaperProps>(
  ({ theme }) => css`
    padding: ${theme.spacing(2)};
    margin-bottom: ${theme.spacing(2)};

    @media screen and (max-width: 600px) {
      & > .MuiBox-root {
        flex-direction: column;
        gap: ${theme.spacing(1.5)};
      }
    }
  `
);

const Title = styled(Typography)<TypographyProps>(
  ({ theme }) => css`
    margin-bottom: ${theme.spacing(1)};
  `
);

const Info = styled(Box)<BoxProps>(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: ${theme.spacing(3)};
  `
);

const InfoNested = styled(Info)<BoxProps>(
  () => css`
    @media screen and (max-width: 600px) {
      justify-content: flex-start;
    }
  `
);

const Skeleton = styled(MuiSkeleton)<SkeletonProps>(
  ({ theme }) => css`
    height: ${theme.spacing(10)};
    margin-bottom: ${theme.spacing(2)};
  `
);

export default { Wrap, Title, Info, InfoNested, Skeleton };
