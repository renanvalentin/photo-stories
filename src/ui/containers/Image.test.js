import React from "react";
import { shallow } from "enzyme";

import { Image } from "./Image";

describe("ui.containers.Image", () => {
  it("changes loading state to false after fetching the image", () => {
    const img = {
      url: "some image",
      description: "crazy cat!"
    };

    const wrapper = shallow(<Image src={img.url} alt={img.description} />);
    expect(wrapper.props().loading).toEqual(false);
  });
});
