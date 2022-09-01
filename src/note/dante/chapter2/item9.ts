export const point1 = "타입 단언은 어지간하면[DOM] 하지 마라.";

interface Point {
  content: string;
}
export const point2 = (content: string): Point => {
  return { content };
};

type You = string | null;
export const point3 = (Null: You): string => {
  return Null!;
  // return Null ?? "you";
};
