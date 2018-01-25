// @flow

import * as React from "react";
import ReactDOM from "react-dom";

import "./Modal.css";

type Props = {
  width: number | string,
  height: number | string,
  children: React.Node,
  onClose: SyntheticEvent<HTMLDivElement> | (() => void)
};

export class Modal extends React.Component<Props> {
  static defaultProps = {
    width: "",
    height: ""
  };

  el: HTMLDivElement;

  constructor(props: Props) {
    super(props);

    this.el = document.createElement("div");
  }

  componentDidMount() {
    window.document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    window.document.body.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      <React.Fragment>
        <button className="Modal-close" onClick={this.props.onClose}>
          X
        </button>
        <div
          className="Modal"
          style={{
            width: `${this.props.width}px`,
            height: `${this.props.height}px`
          }}
        >
          <div className="Modal-content">{this.props.children}</div>
        </div>
        <div className="Modal-overlay" />
      </React.Fragment>,
      this.el
    );
  }
}
