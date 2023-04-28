import { Typography, TypographyProps, Box, BoxProps } from "@mui/material";
import { css, styled } from "@mui/system";

const Body = styled(Box)<BoxProps>(
  ({ theme }) => css`
    margin-top: ${theme.spacing(3)};
    margin-bottom: ${theme.spacing(3)};
    padding-left: ${theme.spacing(1)};
    border-left: 1px solid ${theme.palette.primary.main};
  `
);

const Header = styled(Box)<BoxProps>(
  ({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: ${theme.spacing(2)};
  `
);
const Author = styled(Typography)<TypographyProps>(
  ({ theme }) => css`
    color: ${theme.palette.primary.dark};
    font-weight: bold;
  `
);

const Time = styled(Typography)<TypographyProps>(
  ({ theme }) => css`
    color: ${theme.palette.text.secondary};
  `
);

export default { Body, Header, Author, Time };
