import { TComment } from "@src/types/comment.types";

export type TStory = {
  id: number;
  title: string;
  by: string;
  score: number;
  time: number;
  kids?: number[];
};
