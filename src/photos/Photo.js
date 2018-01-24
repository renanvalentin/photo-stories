// @flow

import React, { Component } from "react";
import classNames from "classnames";

import Image from "../components/Image";
import Modal from "../components/Modal";

import "./Photo.css";

type PhotoProps = {
  thumb: string,
  image: string,
  description: string,
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
          src={props.thumb}
          alt={props.description}
          width="100%"
          height="100%"
        />
        <figcaption
          className={classNames("Photo-description", {
            "Photo-description--hover": props.hovering
          })}
        >
          {props.description}
        </figcaption>
      </div>
      {props.showingImage && (
        <Modal onClose={props.onImageClose}>
          <Image src={props.image} alt={props.description} />
        </Modal>
      )}
    </div>
  );
};

type Props = {
  thumb: string,
  image: string,
  description: string
};

type State = {
  hoveringThumb: boolean,
  showingImage: boolean
};

class PhotoContainer extends Component<Props, State> {
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
        description={this.props.description}
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
