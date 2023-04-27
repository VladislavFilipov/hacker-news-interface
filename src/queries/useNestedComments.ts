import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import storiesApi from "@src/api";
import { TComment } from "@src/types/comment.types";

const useNestedComments = (comment: TComment) => {
  const [enabled, setEnabled] = useState<boolean>(false);
  const {
    data: commentWithNesting,
    error,
    isLoading,
    isFetching,
    status
  } = useQuery({
    queryKey: ["nestedComments", comment.id],
    queryFn: async () => {
      console.log("ONLOAD", comment);

      return await getNestedComments(comment);
    },
    enabled
  });

  return {
    commentWithNesting,
    error,
    isLoading,
    isFetching,
    status,
    enableLoad: () => !enabled && setEnabled(true)
  };
};

const getNestedComments = async (comment: TComment): Promise<TComment> => {
  console.log("comment in", comment);
  if (!comment.kids || comment.kids.length === 0) {
    return comment;
  } else {
    // const newComment = { ...comment };
    comment.childs = await Promise.all(
      comment.kids.map(kidId => storiesApi.getItemById<TComment>(kidId))
    );

    await Promise.all(
      comment.childs
        .filter(comment => comment.kids)
        .map(async comment => await getNestedComments(comment))
    );

    console.log("comment out", comment.by);

    return comment;
    // for (const comment of nestedComments) {
    //   comment.childs = await getNestedComments(comment.kids)
    // }
  }
};

const getComment = async (commentId: number) => {
  return await storiesApi.getItemById<TComment>(commentId);
};

export default useNestedComments;
