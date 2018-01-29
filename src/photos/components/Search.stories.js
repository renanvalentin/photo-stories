// @flow

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Search } from "./Search";

storiesOf("photos.components.Search", module)
  .add("normal", () => (
    <Search
      value=""
      focusing={false}
      onType={action("typing...")}
      onDisplaySearch={action("focus...")}
      onEnter={action("enter hit")}
      onCancel={action("blur...")}
      onSearch={action("searching")}
    />
  ))
  .add("focusing", () => (
    <Search
      value="123"
      focusing={true}
      onType={action("typing...")}
      onDisplaySearch={action("focus...")}
      onCancel={action("blur...")}
      onSearch={action("searching")}
      onEnter={action("enter hit")}
    />
  ));
