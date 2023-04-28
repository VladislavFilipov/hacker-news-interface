import emStyled from "@emotion/styled";
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
    flex-direction: column;
    gap: ${theme.spacing(2)};
    margin-bottom: ${theme.spacing(2)};

    .MuiTypography-root {
      font-weight: bold;
    }
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

const Url = styled(Paper)<PaperProps>(
  ({ theme }) => css`
    padding: ${theme.spacing(1)};
  `
);

const Comments = styled(Box)<BoxProps>(
  ({ theme }) => css`
    margin-top: ${theme.spacing(6)};
  `
);

const CommentsTitle = styled(Box)<BoxProps>(
  ({ theme }) => css`
    display: flex;
    flex-wrap: wrap-reverse;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacing(2)};
    margin-bottom: ${theme.spacing(2)};

    .MuiTypography-root:first-of-type {
      font-weight: bold;
      flex-grow: 1;
    }

    /* & > *:nth-of-type(2) {
      flex-grow: 1;
      width: 100%;
      text-align: right;
    } */
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

export default { Title, Url, Info, Comments, CommentsTitle, Skeleton };
