// @flow

import React from "react";

import { Spinner } from "../../ui";
import type { PhotoType } from "../../types";
import { Photo } from "../containers/Photo";

import "./PhotoStoriesView.css";

type Props = {
  loading: boolean,
  photos: Array<PhotoType>
};

const Loader = ({ loading }: { loading: boolean }) => {
  return loading ? <Spinner /> : null;
};

const List = (props: Props) => {
  if (props.loading) {
    return null;
  }

  return props.photos.length > 0 ? (
    <div className="PhotoStoriesView__List-items">
      {props.photos.map((photo, index) => (
        <div
          className="PhotoStoriesView__List-item"
          key={`photo:${photo.thumb}:${index}`}
        >
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

export const PhotoStoriesView = (props: Props) => {
  return (
    <section>
      <div className="PhotoStoriesView-content">
        <Loader loading={props.loading} />
        <List loading={props.loading} photos={props.photos} />
      </div>
    </section>
  );
};
