import {
  Paper,
  PaperProps,
  Typography,
  TypographyProps,
  Box,
  BoxProps
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

// const Info = styled(Box)<BoxProps>(
//   ({ theme }) => css`
//     display: flex;
//     justify-content: space-between;
//     flex-wrap: wrap;
//     gap: ${theme.spacing(3)};

//     @media screen and (max-width: 600px) {
//       display: block;
//     }
//     /* & > .MuiBox-root:nth-child(2) {
//       flex-grow: 1;
//       justify-content: flex-end;
//     } */
//   `
// );

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

// const InfoItem = styled(Box)<BoxProps>(
//   ({ theme }) => css`
//     display: flex;
//     gap: ${theme.spacing(0.5)};
//     align-items: center;

//     & .MuiSvgIcon-root {
//       font-size: medium;
//       color: ${theme.palette.primary.main};
//     }
//   `
// );

export default { Wrap, Title, Info, InfoNested };
