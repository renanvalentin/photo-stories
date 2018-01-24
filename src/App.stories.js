import React from "react";
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-router";

import App from "./App";

storiesOf("App", module)
  .addDecorator(StoryRouter())
  .add("with thumb", () => <App />);
