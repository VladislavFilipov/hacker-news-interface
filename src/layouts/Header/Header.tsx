import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import S from "./Header.styles";

const Navbar = () => {
  return (
    <header>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <S.Logo to="/">
            <img src="/logo.png" alt="HACKER NEWS INTERFACE" />
          </S.Logo>
        </Toolbar>
      </AppBar>
      <Toolbar variant="dense" />
    </header>
  );
};

export default Navbar;
