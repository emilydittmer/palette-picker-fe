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
import { shallow } from 'enzyme';
import { addPaletteThunk } from '../Thunks/PaletteThunk'

describe("ColorsContainer", () => {
  let wrapper, props;
  let mockEvent = {
    preventDefault: jest.fn(),
    target: {
      name: 'currentProject',
      value: 'Example 1'
    }
  }
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

  it('should set state for the current project', () => {
    wrapper.setState({currentProject: "Example 1"})
    expect(wrapper).toMatchSnapshot()
  })

  it('should set state for the error message', () => {
    wrapper.setState({error: "Error"})
    expect(wrapper).toMatchSnapshot()
  })

  it('should set state for the locked state', () => {
    wrapper.setState({locked:[false, false, false, false, false]})
    expect(wrapper).toMatchSnapshot()
  })

  it('should handle color locking', () => {
    const mockIndex = 0;
    wrapper.instance().handleLockColor(mockIndex)
    expect(wrapper.state('locked')).toEqual([true, false, false, false, false])
  })

  it('should handle change', () => {
    wrapper.instance().handleOnChange(mockEvent)
    expect(wrapper.state('currentProject')).toEqual('Example 1')
  })

  xit('should save the current palette', () => {
    wrapper.instance().handleSavePalette(mockEvent)
    console.log(props.palettes)
  })
});

describe("mapStateToProps", () => {
  it("should return an object with the current palette", () => {
    const mockState = {
      palette: ["ffffff", "000000", '123456', '23456a', 'abcdef'],
      type: "ADD_PALETTE"
    };
    const expected = { palette: ["ffffff", "000000", '123456', '23456a', 'abcdef'], type: "ADD_PALETTE" } ;
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
  it("should return an object with all projects", () => {
    const mockState = {
      projects: [{id: 1, title: "Example 1"}],
      type: "GET PROJECTS"
    };
    const expected = { projects: [{id: 1, title: "Example 1"}], type: "GET PROJECTS" } ;
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});

describe("mapDispatchToProps", () => {
  it("calls dispatch with a addPalette action", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = addPalette({palette: ["ffffff", "000000", '123456', '23456a', 'abcdef']});
    const mappedDispatch = mapDispatchToProps(mockDispatch);
    mappedDispatch.addPalette({palette: ["ffffff", "000000", '123456', '23456a', 'abcdef']});
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
  xit("calls dispatch with a savePalette action", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = savePalette({colors: ["ffffff", "000000", '123456', '23456a', 'abcdef'], id: 1});
    const mappedDispatch = mapDispatchToProps(mockDispatch);
    mappedDispatch.savePalette({colors: ["ffffff", "000000", '123456', '23456a', 'abcdef'], id: 1});
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});