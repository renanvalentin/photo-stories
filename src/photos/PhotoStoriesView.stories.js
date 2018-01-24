import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import PhotoContainer, { PhotoStoriesView } from "./PhotoStoriesView";

const photo = {
  image: "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
  thumb: "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif",
  description: "crazy cat!"
};

const photos = Array.from({ length: 50 }, () => photo);

storiesOf("Photo Stories View", module)
  .add("loading", () => <PhotoStoriesView loading photos={[]} />)
  .add("with items", () => <PhotoStoriesView loading={false} photos={photos} />)
  .add("empty", () => <PhotoStoriesView loading={false} photos={[]} />);
