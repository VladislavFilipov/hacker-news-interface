import { NavLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Link from "@src/components/Link/Link";

const Navbar = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Link to="/">News</Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navbar;
