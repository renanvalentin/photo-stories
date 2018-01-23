// @flow

import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Spinner from "./Spinner";

storiesOf("Spinner", module).add("default", () => <Spinner />);
