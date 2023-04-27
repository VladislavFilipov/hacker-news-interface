import { Paper, PaperProps, Typography, TypographyProps } from "@mui/material";
import { css, styled } from "@mui/system";

import Link, { TLinkProps } from "@src/components/Link/Link";

const Wrap = styled(Paper)<PaperProps>(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2)
}));

const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  // padding: theme.spacing(2),
  // marginBottom: theme.spacing(2)
}));

export default { Wrap, Title };
