import request from "@src/lib/axiosRequest";
import { TComment } from "@src/types/comment.types";
import { TStory } from "@src/types/story.types";
import { GET } from "@src/utils/const/httpMethods";

const storiesApi = {
  getIdsList: async (limit: number) =>
    request<number[]>({
      method: GET,
      url: `/newstories.json?print=pretty`
    }).then(res => res.slice(0, limit)),
  getById: async (id: number) =>
    request<TStory>({
      method: GET,
      url: `/item/${id}.json?print=pretty`
    }),
  getCommentById: async (id: number) =>
    request<TComment>({
      method: GET,
      url: `/item/${id}.json?print=pretty`
    })
};

export default storiesApi;
