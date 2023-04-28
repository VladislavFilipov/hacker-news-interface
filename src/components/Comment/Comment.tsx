import { FC, useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import useCommentChilds from "@src/components/Comment/queries/useCommentChilds";
import useCommentsTree from "@src/components/Comment/queries/useCommentsTree";
import LoadingWrap from "@src/components/LoadingWrap/LoadingWrap";
import { TComment } from "@src/types/comment.types";
import { formatUnixDateWithTime } from "@src/utils/functions/format/date";

import S from "./Comment.styles";

const Comment: FC<{ comment: TComment; onlyChilds?: boolean }> = ({
  comment,
  onlyChilds = false
}) => {
  console.log("onlyChilds", onlyChilds);

  const nested = onlyChilds
    ? useCommentChilds(comment)
    : useCommentsTree(comment);

  const [showChilds, setShowChilds] = useState<boolean>(!!comment.childs);

  return (
    <S.Body>
      <S.Header>
        <S.Author variant="subtitle1">{comment.by}</S.Author>
        <S.Time variant="body2">
          {formatUnixDateWithTime(comment.time * 1000)}
        </S.Time>
      </S.Header>

      <Typography dangerouslySetInnerHTML={{ __html: comment.text }} />
      {comment.kids && (
        <>
          <LoadingWrap
            isLoading={nested.isFetching}
            error={nested.error}
            repeatHandler={() => {
              if (!comment.childs) nested.refetch();
              setShowChilds(prev => !prev);
            }}
          >
            <Button
              onClick={() => {
                if (!comment.childs) nested.refetch();
                setShowChilds(prev => !prev);
              }}
            >
              {showChilds ? "Hide" : "Show"} {comment.kids.length} answers
            </Button>
          </LoadingWrap>

          {showChilds && comment?.childs && (
            <Box sx={{ marginLeft: 3 }}>
              {comment.childs.map(nestedComment => (
                <Comment
                  key={nestedComment.id}
                  comment={nestedComment}
                  onlyChilds={onlyChilds}
                />
              ))}
            </Box>
          )}
        </>
      )}
    </S.Body>
  );
};

export default Comment;
