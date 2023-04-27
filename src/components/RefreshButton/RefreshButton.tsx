import { FC } from "react";

import RefreshIcon from "@mui/icons-material/Refresh";
import { IconButton } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

type TProps = {
  isFetching: boolean;
  clickHandler: () => void;
};
const RefreshButton: FC<TProps> = ({ isFetching, clickHandler }) => {
  return (
    <IconButton onClick={() => clickHandler()}>
      {isFetching ? <CircularProgress size={24} /> : <RefreshIcon />}
    </IconButton>
  );
};

export default RefreshButton;
