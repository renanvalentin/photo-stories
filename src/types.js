export type Image = {
  url: string,
  width: number,
  height: number
};

export type Photo = {
  thumb: Image,
  image: Image,
  title: string
};
