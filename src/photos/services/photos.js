// @flow

import type { PhotoType } from "../../types";

const apiKey = "3Ll12q7lfpyRNOxgdwJTHC0sx9YuX2bj";
const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=cat&limit=25&offset=0&rating=G&lang=en`;

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
