// @flow

import React, { Component } from "react";
import classNames from "classnames";

import Spinner from "../components/Spinner";
import * as types from "../types";

import Photo from "./Photo";
import "./PhotoStoriesView.css";

type PhotoStoriesViewProps = {
  loading: boolean,
  photos: Array<types.Photo>
};

export const Loader = ({ loading }: { loading: boolean }) => {
  return loading ? <Spinner /> : null;
};

export const List = (props: PhotoStoriesViewProps) => {
  if (props.loading) {
    return null;
  }

  return props.photos.length > 0 ? (
    <div className="PhotoStoriesView__List-items">
      {props.photos.map(photo => (
        <div className="PhotoStoriesView__List-item">
          <Photo
            thumb={photo.thumb}
            image={photo.image}
            description={photo.description}
          />
        </div>
      ))}
    </div>
  ) : (
    <span className="PhotoStoriesView__List-empty">
      No Stories... Game over :(
    </span>
  );
};

export const PhotoStoriesView = (props: PhotoStoriesViewProps) => {
  return (
    <section>
      <header className="PhotoStoriesView-header">
        <h1 className="PhotoStoriesView-title">Photo stories</h1>
      </header>
      <div className="PhotoStoriesView-content">
        <Loader loading={props.loading} />
        <List loading={props.loading} photos={props.photos} />
      </div>
    </section>
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
    return <PhotoStoriesView loading photos={[]} />;
  }
}

export default PhotoContainer;