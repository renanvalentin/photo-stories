// @flow

import React from "react";
import { storiesOf } from "@storybook/react";

import ImageContainer, { Image } from "./Image";

const img = {
  url: "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
  description: "crazy cat!"
};

storiesOf("Image", module)
  .add("loading", () => (
    <Image
      width="100%"
      height="100%"
      loading
      src={img.url}
      alt={img.description}
    />
  ))
  .add("with image", () => (
    <Image
      width="100%"
      height="100%"
      loading={false}
      src={img.url}
      alt={img.description}
    />
  ))
  .add("default", () => <ImageContainer src={img.url} alt={img.description} />);
