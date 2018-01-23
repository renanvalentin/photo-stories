// @flow

import React, { Component } from "react";

import Spinner from "./Spinner";

type ImageProps = {
  width: string,
  height: string,
  loading: boolean,
  src: string,
  alt: string
};

export const Image = (props: ImageProps) => {
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

type ImageContainerProps = {
  width: string,
  height: string,
  src: string,
  alt: string
};

type State = {
  loading: boolean
};

class ImageContainer extends Component<ImageContainerProps, State> {
  state = {
    loading: true
  };

  static defaultProps = {
    width: "auto",
    height: "auto"
  };

  componentDidMount() {
    const image = new window.Image();

    image.onload = () => this.setState({ loading: false });
    image.src = this.props.src;
  }

  render() {
    return (
      <Image
        width={this.props.width}
        height={this.props.height}
        loading={this.state.loading}
        src={this.props.src}
        alt={this.props.alt}
      />
    );
  }
}

export default ImageContainer;
