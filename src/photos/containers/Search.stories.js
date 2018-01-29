// @flow

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Search } from "./Search";

storiesOf("photos.containers.Search", module).add("sample", () => (
  <Search onSearch={action("result:")} />
));
