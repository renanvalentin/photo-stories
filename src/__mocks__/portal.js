import ReactDOM from "react-dom";

try {
  // todo: enzyme is not working with portals
  // https://github.com/airbnb/enzyme/issues/1150
  ReactDOM.createPortal = children => {
    return children;
  };
} catch (err) {}
