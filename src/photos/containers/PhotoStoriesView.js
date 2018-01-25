// @flow

import React, { Component } from "react";

import type { PhotoType } from "../../types";
import { PhotoStoriesView as PhotoStoriesViewComponent } from "../components/PhotoStoriesView";
import { fetchPhotos } from "../services/photos";

type Props = {
  thumb: string,
  image: string,
  description: string
};

type State = {
  photos: Array<PhotoType>,
  loading: boolean
};

export class PhotoStoriesView extends Component<Props, State> {
  state = {
    photos: [],
    loading: true
  };

  mounted: boolean;

  componentDidMount() {
    this.mounted = true;
    fetchPhotos()
      .then(photos => {
        if (!this.mounted) return;
        this.setState({
          photos,
          loading: false
        });
      })
      .catch(() => {
        this.setState({
          loading: false
        });
      });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <PhotoStoriesViewComponent
        loading={this.state.loading}
        photos={this.state.photos}
      />
    );
  }
}
