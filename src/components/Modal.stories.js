// @flow

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Modal from "./Modal";
import Image from "./Image";

const img = {
  url: "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
  description: "crazy cat!"
};

storiesOf("Modal", module).add("default", () => (
  <Modal onClose={action("modal closed!")}>
    <Image src={img.url} alt={img.description} />
  </Modal>
));
