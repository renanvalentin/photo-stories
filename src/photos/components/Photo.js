// @flow

import React from "react";
import classNames from "classnames";

import { Image } from "../../ui";
import { Modal } from "../../ui";
import type { ImageType } from "../../types";

import "./Photo.css";

type Props = {
  thumb: ImageType,
  image: ImageType,
  title: string,
  showingImage: boolean,
  hovering: boolean,
  onThumbClick: SyntheticEvent<HTMLDivElement> | (() => void),
  onDescriptionToggle: (state: boolean) => void,
  onImageClose: () => void
};

export const Photo = (props: Props) => {
  return (
    <div
      className="Photo"
      onMouseEnter={() => props.onDescriptionToggle(true)}
      onMouseLeave={() => props.onDescriptionToggle(false)}
      style={{
        width: `${props.thumb.width}px`,
        height: `${props.thumb.height}px`
      }}
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
