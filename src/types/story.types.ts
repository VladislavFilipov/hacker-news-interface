import { TComment } from "@src/types/comment.types";

export type TStory = {
  id: number;
  title: string;
  by: string;
  score: number;
  time: number;
  descendants: number;
  url: string;
  kids?: number[];
};
