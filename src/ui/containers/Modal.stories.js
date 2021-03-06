// @flow

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Modal } from "./Modal";
import { Image } from "./Image";

const img = {
  url: "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
  description: "crazy cat!"
};

storiesOf("ui.containers.Modal", module)
  .add("default", () => (
    <Modal onClose={action("modal closed!")}>
      <Image src={img.url} alt={img.description} />
    </Modal>
  ))
  .add("with size", () => (
    <Modal onClose={action("modal closed!")} width="640px" height="480px">
      <Image src={img.url} alt={img.description} />
    </Modal>
  ));
