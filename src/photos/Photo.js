// @flow

import React, { Component } from "react";
import classNames from "classnames";

import Image from "../components/Image";
import Modal from "../components/Modal";
import * as types from "../types";

import "./Photo.css";

type PhotoProps = {
  thumb: types.Image,
  image: types.Image,
  title: string,
  showingImage: boolean,
  hovering: boolean,
  onThumbClick: SyntheticEvent<HTMLDivElement> | (() => void),
  onDescriptionToggle: (state: boolean) => void,
  onImageClose: () => void
};

export const Photo = (props: PhotoProps) => {
  return (
    <div
      className="Photo"
      onMouseEnter={() => props.onDescriptionToggle(true)}
      onMouseLeave={() => props.onDescriptionToggle(false)}
    >
      <div className="Photo-thumb" onClick={props.onThumbClick}>
        <Image
          src={props.thumb.url}
          width={props.thumb.width}
          height={props.thumb.height}
          alt={props.title}
        />
        <figcaption
          className={classNames("Photo-description", {
            "Photo-description--hover": props.hovering
          })}
        >
          {props.title}
        </figcaption>
      </div>
      {props.showingImage && (
        <Modal onClose={props.onImageClose}>
          <Image
            src={props.image.url}
            width={props.image.width}
            height={props.image.height}
            alt={props.title}
          />
        </Modal>
      )}
    </div>
  );
};

type State = {
  hoveringThumb: boolean,
  showingImage: boolean
};

class PhotoContainer extends Component<types.Photo, State> {
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
      <Photo
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

export default PhotoContainer;
