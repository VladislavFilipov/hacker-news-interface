export type TComment = {
  id: number;
  by: string;
  text: string;
  time: number;
  kids?: number[];
  childs?: TComment[];
};
