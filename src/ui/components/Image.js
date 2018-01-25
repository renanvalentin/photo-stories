// @flow

import React from "react";

import { Spinner } from "./Spinner";

type Props = {
  width?: string,
  height?: string,
  loading: boolean,
  src: string,
  alt: string
};

export const Image = (props: Props) => {
  return props.loading ? (
    <Spinner />
  ) : (
    <img
      src={props.src}
      width={props.width}
      height={props.height}
      alt={props.alt}
    />
  );
};

Image.defaultProps = {
  width: "auto",
  height: "auto"
};
