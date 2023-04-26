import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";

import { LinkProps, Link as MuiLink } from "@mui/material";

const Link: FC<LinkProps & { to: string }> = ({ to, children, ...props }) => {
  return (
    <MuiLink component={RouterLink} to={to} {...props}>
      {children}
    </MuiLink>
  );
};

export default Link;
