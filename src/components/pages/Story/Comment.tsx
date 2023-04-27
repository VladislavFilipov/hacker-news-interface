import { FC, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import useNestedComments from "@src/queries/useNestedComments";
import { TComment } from "@src/types/comment.types";

const Comment: FC<{ comment: TComment }> = ({ comment }) => {
  const { error, isFetching, enableLoad } = useNestedComments(comment);

  const [showNested, setShowNested] = useState<boolean>(!!comment.childs);

  return (
    <Box sx={{ mt: 2, pl: 1, borderLeft: "1px solid white" }}>
      <Typography variant="h6">
        {comment.id} by {comment.by}
      </Typography>
      <Typography>{comment.text}</Typography>
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
              {showNested ? "Hide" : "Show"} answers
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
    </Box>
  );
};

// const Answer = () => {

// }

export default Comment;
