import { useQuery } from "@tanstack/react-query";

import storiesApi from "@src/api";
import { TComment } from "@src/types/comment.types";

const useCommentChilds = (comment: TComment) => {
  const result = useQuery({
    queryKey: ["commentChilds", comment.id],
    queryFn: async () => await addChildComments(comment),
    enabled: false
  });

  return result;
};

const addChildComments = async (comment: TComment): Promise<TComment> => {
  if (comment.kids)
    comment.childs = await Promise.all(
      comment.kids.map(kidId => storiesApi.getItemById<TComment>(kidId))
    );

  return comment;
};

export default useCommentChilds;
