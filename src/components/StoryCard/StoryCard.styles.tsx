import {
  Paper,
  PaperProps,
  Typography,
  TypographyProps,
  Box,
  BoxProps,
  Skeleton as MuiSkeleton,
  SkeletonProps
} from "@mui/material";
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

    /* @media screen and (max-width: 600px) {
      & > .MuiBox-root:nth-child(2) {
        display: block;
      }
    } */
  `
);

const InfoNested = styled(Info)<BoxProps>(
  ({ theme }) => css`
    @media screen and (max-width: 600px) {
      /* & > .MuiBox-root:nth-child(2) {
        display: block;
      } */
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
