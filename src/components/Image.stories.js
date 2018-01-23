// @flow

import React from "react";
import { storiesOf } from "@storybook/react";

import Image, { ImageRender } from "./Image";

const img = {
  url: "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
  description: "crazy cat!"
};

storiesOf("Image", module)
  .add("loading", () => (
    <ImageRender
      width="100%"
      height="100%"
      loading
      src={img.url}
      alt={img.description}
    />
  ))
  .add("with image", () => (
    <ImageRender
      width="100%"
      height="100%"
      loading={false}
      src={img.url}
      alt={img.description}
    />
  ))
  .add("default", () => <Image src={img.url} alt={img.description} />);
