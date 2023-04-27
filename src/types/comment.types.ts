export type TComment = {
  id: number;
  by: string;
  text: string;
  kids?: number[];
  childs?: TComment[];
};
