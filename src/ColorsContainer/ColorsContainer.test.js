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
      palettes: { palettes: [] },
      projects: { projects: [] },
      currentPalette: { currentPalette: [] }
    };
    wrapper = shallow(<ColorsContainer {...props} />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
