// @flow

import React, { Component } from "react";

import Spinner from "../components/Spinner";
import * as types from "../types";

import Photo from "./Photo";
import { fetchPhotos } from "./services";
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
          <Photo thumb={photo.thumb} image={photo.image} title={photo.title} />
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
  photos: Array<types.Photo>,
  loading: boolean
};

class PhotoContainer extends Component<Props, State> {
  state = {
    photos: [],
    loading: true
  };

  componentDidMount() {
    fetchPhotos().then(photos => {
      this.setState({
        photos,
        loading: false
      });
    });
  }

  render() {
    return (
      <PhotoStoriesView
        loading={this.state.loading}
        photos={this.state.photos}
      />
    );
  }
}

export default PhotoContainer;
