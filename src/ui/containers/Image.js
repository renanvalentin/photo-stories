// @flow

import React, { Component } from "react";

import { Image as ImageComponent } from "../components/Image";

type Props = {
  width: string,
  height: string,
  src: string,
  alt: string
};

type State = {
  loading: boolean
};

export class Image extends Component<Props, State> {
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
      <ImageComponent
        width={this.props.width}
        height={this.props.height}
        loading={this.state.loading}
        src={this.props.src}
        alt={this.props.alt}
      />
    );
  }
}
