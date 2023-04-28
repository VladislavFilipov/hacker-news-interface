import Box, { BoxProps } from "@mui/material/Box";
import Paper, { PaperProps } from "@mui/material/Paper";
import MuiSkeleton, { SkeletonProps } from "@mui/material/Skeleton";
import { css, styled } from "@mui/system";

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
    word-break: break-all;
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
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacing(2)};
    margin-bottom: ${theme.spacing(2)};

    .MuiTypography-root:first-of-type {
      font-weight: bold;
      flex-grow: 1;
    }
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
