// @flow

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import PhotoContainer, { PhotoStoriesView } from "./PhotoStoriesView";

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

const photos = Array.from({ length: 50 }, () => photo);

storiesOf("Photo Stories View", module)
  .add("loading", () => <PhotoStoriesView loading photos={[]} />)
  .add("with items", () => <PhotoStoriesView loading={false} photos={photos} />)
  .add("empty", () => <PhotoStoriesView loading={false} photos={[]} />);
