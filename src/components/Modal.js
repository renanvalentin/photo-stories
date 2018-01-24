// @flow

import * as React from "react";
import ReactDOM from "react-dom";

import "./Modal.css";

type Props = {
  children: React.Node,
  onClose: SyntheticEvent<HTMLDivElement> | (() => void)
};

class Modal extends React.Component<Props> {
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
        <div className="Modal">
          <div className="Modal-content">{this.props.children}</div>
        </div>
        <div className="Modal-overlay" />
      </React.Fragment>,
      this.el
    );
  }
}

export default Modal;
