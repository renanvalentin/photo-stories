// @flow

import type { PhotoType } from "../../types";

const apiKey = "dc6zaTOxFJmzC";
const url = `http://api.giphy.com/v1/stickers/trending?api_key=${apiKey}`;

export const fetchPhotos = (): Promise<Array<PhotoType>> => {
  return fetch(url)
    .then(res => res.json())
    .then(data =>
      data.data.map(item => ({
        thumb: {
          url: item.images.preview_gif.url,
          width: item.images.preview_gif.width,
          height: item.images.preview_gif.height
        },
        image: {
          url: item.images.original.url,
          width: item.images.original.width,
          height: item.images.original.height
        },
        title: item.title
      }))
    );
};
