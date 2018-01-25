// @flow

import React, { Component } from "react";

import type { PhotoType } from "../../types";
import { Photo as PhotoComponent } from "../components/Photo";

type State = {
  hoveringThumb: boolean,
  showingImage: boolean
};

export class Photo extends Component<PhotoType, State> {
  state = {
    hoveringThumb: false,
    showingImage: false
  };

  toggleDescriptionVisibility = (state: boolean) => {
    this.setState({
      hoveringThumb: state
    });
  };

  toggleImageVisibility = () => {
    this.setState({
      showingImage: !this.state.showingImage
    });
  };

  render() {
    return (
      <PhotoComponent
        thumb={this.props.thumb}
        image={this.props.image}
        title={this.props.title}
        showingImage={this.state.showingImage}
        hovering={this.state.hoveringThumb}
        onThumbClick={this.toggleImageVisibility}
        onImageClose={this.toggleImageVisibility}
        onDescriptionToggle={this.toggleDescriptionVisibility}
      />
    );
  }
}
