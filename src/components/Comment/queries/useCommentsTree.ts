import { useQuery } from "@tanstack/react-query";

import storiesApi from "@src/api";
import { TComment } from "@src/types/comment.types";

const useCommentsTree = (comment: TComment) => {
  const result = useQuery({
    queryKey: ["commentsTree", comment.id],
    queryFn: async () => await addNestedComments(comment),
    enabled: false
  });

  return result;
};

const addNestedComments = async (comment: TComment): Promise<TComment> => {
  if (!comment.kids || comment.kids.length === 0) {
    return comment;
  } else {
    comment.childs = await Promise.all(
      comment.kids.map(kidId => storiesApi.getItemById<TComment>(kidId))
    );

    await Promise.all(
      comment.childs
        .filter(comment => comment.kids)
        .map(async comment => await addNestedComments(comment))
    );

    return comment;
  }
};

export default useCommentsTree;
