import { styled, css } from "@mui/material/styles";

import Link, { TLinkProps } from "@src/components/Link/Link";

const Logo = styled(Link)<TLinkProps>(
  ({ theme }) => css`
    height: 2rem;
    margin-right: ${theme.spacing(5)};

    img {
      height: 100%;
    }
  `
);

export default { Logo };
