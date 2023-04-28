import { FC, ReactNode } from "react";

import Typography from "@mui/material/Typography";

import S from "./LabelWithIcon.styles";

type TProps = {
  icon: ReactNode;
  text: string | number;
};

const LabelWithIcon: FC<TProps> = ({ icon, text }) => {
  return (
    <S.Wrap>
      {icon}
      <Typography variant="body2">{text}</Typography>
    </S.Wrap>
  );
};

export default LabelWithIcon;
