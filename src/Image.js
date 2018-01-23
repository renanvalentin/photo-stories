// @flow

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

type Props = {
  width: string,
  height: string,
  loading: boolean,
  src: string,
  alt: string
};

export class Image extends Component<Props> {
  render() {
    return this.props.loading ? (
      <div>loading</div>
    ) : (
      <img
        src={this.props.src}
        width={this.props.width}
        height={this.props.height}
        alt={this.props.alt}
      />
    );
  }
}
