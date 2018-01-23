// @flow

import React, { Component } from "react";

type ImageRenderProps = {
  width: string,
  height: string,
  loading: boolean,
  src: string,
  alt: string
};

export const ImageRender = (props: ImageRenderProps) => {
  return props.loading ? (
    <div>loading</div>
  ) : (
    <img
      src={props.src}
      width={props.width}
      height={props.height}
      alt={props.alt}
    />
  );
};

type ImageProps = {
  width: string,
  height: string,
  src: string,
  alt: string
};

type State = {
  loading: boolean
};

class Image extends Component<ImageProps, State> {
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
      <ImageRender
        width={this.props.width}
        height={this.props.height}
        loading={this.state.loading}
        src={this.props.src}
        alt={this.props.alt}
      />
    );
  }
}

export default Image;
