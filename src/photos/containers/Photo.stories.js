// @flow

import React from "react";
import { storiesOf } from "@storybook/react";

import { Photo } from "./Photo";

const photo = {
  image: {
    url: "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
    width: 720,
    height: 720
  },
  thumb: {
    url: "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif",
    width: 200,
    height: 200
  },
  title: "crazy cat!"
};

storiesOf("photos.containers.Photo", module).add("sample", () => (
  <Photo thumb={photo.thumb} image={photo.image} title={photo.title} />
));
