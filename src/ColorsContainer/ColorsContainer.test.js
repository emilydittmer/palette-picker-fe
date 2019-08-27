import React from "react";
import {
  ColorsContainer,
  mapStateToProps,
  mapDispatchToProps
} from "./ColorsContainer";
import { 
  addPalette, 
  savePalette, 
  getPalettes 
} from "../Actions";
import { shallow } from 'enzyme'

describe("ColorsContainer", () => {
  let wrapper, props;
  beforeEach(() => {
    props = {
      palettes: [],
      projects:  [{id: 1, title: 'Example 1'}, {id: 2, title: 'Example 2'}],
      currentPalette: []
    };
    wrapper = shallow(<ColorsContainer {...props} />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
