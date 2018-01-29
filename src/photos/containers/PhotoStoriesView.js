// @flow

import React, { Component, Fragment } from "react";

import type { PhotoType } from "../../types";
import { PhotoStoriesView as PhotoStoriesViewComponent } from "../components/PhotoStoriesView";
import { fetchPhotos } from "../services/photos";

import { Search } from "./Search";

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

  updateSearchResult = (photos: Array<PhotoType>) => {
    this.setState({
      photos
    });
  };

  render() {
    return (
      <Fragment>
        <Search onSearch={this.updateSearchResult} />
        <PhotoStoriesViewComponent
          loading={this.state.loading}
          photos={this.state.photos}
        />
      </Fragment>
    );
  }
}
