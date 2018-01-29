// @flow

import React, { Component } from "react";

import type { PhotoType } from "../../types";
import { Search as SearchComponent } from "../components/Search";
import { fetchPhotos } from "../services/photos";

type Props = {
  onSearch: (photos: Array<PhotoType>) => void
};

type State = {
  focusing: boolean,
  value: string
};

export class Search extends Component<Props, State> {
  state = {
    focusing: false,
    value: ""
  };

  setValue = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({
      value: e.target.value
    });
  };

  showSearch = () => {
    this.setState({
      focusing: true
    });
  };

  hideSearch = () => {
    this.reset();
  };

  search = () => {
    fetchPhotos(this.state.value).then(photos => {
      this.reset();
      this.props.onSearch(photos);
    });
  };

  reset = () => {
    this.setState({
      focusing: false
    });
  };

  render() {
    return (
      <SearchComponent
        value={this.state.value}
        focusing={this.state.focusing}
        onType={this.setValue}
        onDisplaySearch={this.showSearch}
        onCancel={this.hideSearch}
        onSearch={this.search}
        onEnter={this.search}
      />
    );
  }
}
