import { FC, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import useNestedComments from "@src/hooks/queries/useNestedComments";
import { TComment } from "@src/types/comment.types";
import { formatUnixDateWithTime } from "@src/utils/functions/format/date";

import S from "./Comment.styles";

const Comment: FC<{ comment: TComment }> = ({ comment }) => {
  const { error, isFetching, enableLoad } = useNestedComments(comment);

  const [showNested, setShowNested] = useState<boolean>(!!comment.childs);

  return (
    <S.Body>
      <S.Header>
        <S.Author variant="subtitle1">{comment.by}</S.Author>
        <S.Time variant="body2">
          {formatUnixDateWithTime(comment.time * 1000)}
        </S.Time>
      </S.Header>

      <Typography dangerouslySetInnerHTML={{ __html: comment.text }} />
      {/* {comment.text}
      </Typography> */}
      {comment.kids && (
        <>
          {isFetching ? (
            <Typography>Loading...</Typography>
          ) : (
            <Button
              onClick={() => {
                if (!comment.childs) enableLoad();
                setShowNested(prev => !prev);
              }}
            >
              {showNested ? "Hide" : `Show ${comment.kids.length}`} answers
            </Button>
          )}
          {error && <Typography>error...</Typography>}

          {showNested && comment?.childs && (
            <Box sx={{ marginLeft: 3 }}>
              {comment.childs.map(nestedComment => (
                <Comment key={nestedComment.id} comment={nestedComment} />
              ))}
            </Box>
          )}
        </>
      )}
    </S.Body>
  );
};

// const Answer = () => {

// }

export default Comment;
