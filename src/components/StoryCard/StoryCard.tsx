import { FC } from "react";

import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import StarsIcon from "@mui/icons-material/Stars";
import { Typography } from "@mui/material";

import LabelWithIcon from "@src/components/LabelWithIcon/LabelWithIcon";
import { TStory } from "@src/types/story.types";
import { formatUnixDateWithTime } from "@src/utils/functions/format/date";

import S from "./StoryCard.styles";

const StoryCard: FC<{ story: TStory }> = ({ story }) => {
  return (
    <S.Wrap variant="elevation" elevation={5}>
      <S.Title variant="h6">{story.title}</S.Title>
      <S.Info>
        <LabelWithIcon
          text={story.by}
          icon={<AccountCircleIcon color="primary" />}
        />
        <S.InfoNested>
          <LabelWithIcon
            text={story.descendants}
            icon={<ChatIcon color="disabled" />}
          />
          <LabelWithIcon
            text={story.score}
            icon={<StarsIcon color="warning" />}
          />
          <LabelWithIcon
            text={formatUnixDateWithTime(story.time * 1000)}
            icon={<AccessTimeFilledIcon color="disabled" />}
          />
        </S.InfoNested>
      </S.Info>
    </S.Wrap>
  );
};

export default StoryCard;
