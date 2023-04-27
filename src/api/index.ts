import request from "@src/lib/axiosRequest";
import { GET } from "@src/utils/const/httpMethods";

const Api = {
  getNewStoryIds: async (limit: number) =>
    request<number[]>({
      method: GET,
      url: `/beststories.json?print=pretty`
    }).then(res => res.slice(0, limit)),
  getItemById: async <Type>(id: number) =>
    request<Type>({
      method: GET,
      url: `/item/${id}.json?print=pretty`
    })
};

export default Api;
