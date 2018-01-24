// @flow

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import PhotoContainer, { Photo } from "./Photo";

const photo = {
  image: {
    url: "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
    width: 720,
    height: 720
  },
  thumb: {
    url: "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif",
    width: 200,
    height: 200
  },
  title: "crazy cat!"
};

storiesOf("Photo", module)
  .add("with thumb", () => (
    <Photo
      thumb={photo.thumb}
      image={photo.image}
      title={photo.title}
      showingImage={false}
      hovering={false}
      onThumbClick={action("thumb clicked!")}
      onDescriptionToggle={action("thumb toggled!")}
      onImageClose={action("image closed!")}
    />
  ))
  .add("with hover", () => (
    <Photo
      thumb={photo.thumb}
      image={photo.image}
      title={photo.title}
      showingImage={false}
      hovering={true}
      onThumbClick={action("thumb clicked!")}
      onDescriptionToggle={action("thumb toggled!")}
      onImageClose={action("image closed!")}
    />
  ))
  .add("with lightbox", () => (
    <Photo
      thumb={photo.thumb}
      image={photo.image}
      title={photo.title}
      showingImage={true}
      hovering={false}
      onThumbClick={action("thumb clicked!")}
      onDescriptionToggle={action("thumb toggled!")}
      onImageClose={action("image closed!")}
    />
  ))
  .add("sample", () => (
    <PhotoContainer
      thumb={photo.thumb}
      image={photo.image}
      title={photo.title}
    />
  ));
