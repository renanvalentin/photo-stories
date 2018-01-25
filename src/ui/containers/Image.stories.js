// @flow

import React from "react";
import { storiesOf } from "@storybook/react";

import { Image } from "./Image";

const img = {
  url: "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
  description: "crazy cat!"
};

storiesOf("ui.containers.Image", module).add("default", () => (
  <Image src={img.url} alt={img.description} />
));
