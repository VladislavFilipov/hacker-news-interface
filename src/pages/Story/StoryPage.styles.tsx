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
import { css, styled } from "@mui/system";

import Link, { TLinkProps } from "@src/components/Link/Link";

const Title = styled(Box)<BoxProps>(
  ({ theme }) => css`
    display: flex;
    flex-wrap: wrap-reverse;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacing(2)};
    margin-bottom: ${theme.spacing(2)};

    .MuiTypography-root {
      font-weight: bold;
    }
  `
);

const Url = styled(Paper)<PaperProps>(
  ({ theme }) => css`
    padding: ${theme.spacing(1)};
    margin-bottom: ${theme.spacing(6)};
  `
);

const Info = styled(Box)<BoxProps>(
  ({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: ${theme.spacing(2)};
    margin-bottom: ${theme.spacing(2)};
  `
);

const Skeleton = {
  Title: styled(MuiSkeleton)<SkeletonProps>(
    ({ theme }) => css`
      height: ${theme.spacing(10)};
      margin-top: ${theme.spacing(6)};
      margin-bottom: ${theme.spacing(2)};
    `
  ),
  Info: styled(MuiSkeleton)<SkeletonProps>(
    ({ theme }) => css`
      height: ${theme.spacing(3)};
      margin-bottom: ${theme.spacing(2)};
      width: 50%;
    `
  ),
  Link: styled(MuiSkeleton)<SkeletonProps>(
    ({ theme }) => css`
      height: ${theme.spacing(5)};
      margin-bottom: ${theme.spacing(6)};
    `
  ),
  CommentsTitle: styled(MuiSkeleton)<SkeletonProps>(
    ({ theme }) => css`
      height: ${theme.spacing(5)};
      margin-bottom: ${theme.spacing(2)};
    `
  ),
  Comment: styled(MuiSkeleton)<SkeletonProps>(
    ({ theme }) => css`
      height: ${theme.spacing(10)};
      margin-bottom: ${theme.spacing(2)};
    `
  )
};

export default { Title, Url, Info, Skeleton };
