// @flow

import React from "react";
import classNames from "classnames";

import "./Search.css";

type Props = {
  focusing: boolean,
  value: string,
  onType: (e: SyntheticInputEvent<HTMLInputElement>) => void,
  onDisplaySearch: SyntheticEvent<HTMLInputElement> | (() => void),
  onCancel: SyntheticEvent<HTMLInputElement> | (() => void),
  onSearch: SyntheticEvent<HTMLButtonElement> | (() => void),
  onEnter: () => void
};

export const Search = (props: Props) => {
  return (
    <div
      className={classNames("Search", {
        "Search--focus": props.focusing
      })}
    >
      <input
        className={classNames("Search-input", {
          "Search-input--focus": props.focusing
        })}
        value={props.value}
        onChange={props.onType}
        onFocus={props.onDisplaySearch}
        onKeyPress={(e: SyntheticEvent<HTMLInputElement>) => {
          if (e.key === "Enter") {
            props.onEnter();
          }
        }}
        placeholder="Search... cat... be happy! :D"
      />
      <button
        className={classNames("Search-cancel", {
          "Search-cancel--focus": props.focusing
        })}
        onClick={props.onCancel}
      >
        [X] cancel
      </button>
      <button
        className={classNames("Search-button", {
          "Search-button--focus": props.focusing
        })}
        onClick={props.onSearch}
      >
        ok!
      </button>
    </div>
  );
};
