import React from 'react';
import PaletteInProject from "./PaletteInProject";
import { shallow } from 'enzyme';

describe('PaletteInProject', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      id: 1,
      color1: "ffffff",
      color2: "000000",
      color3: '123456',
      color4: '23456a',
      color5: 'abcdef',
      deletePalette: jest.fn()
    },
    wrapper = shallow(<PaletteInProject {...props} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  xit('should call deletePalette on click', () => {
    wrapper.instance().deletePalette(id)
  })
})