import React from 'react';
import DeviceFooter from './DeviceFooter';
import { shallow } from 'enzyme';

describe('<DeviceFooter />', () => {
  it('renders 3 <p>', () => {
    const wrapper = shallow(<DeviceFooter />);
    expect(wrapper.find('p').length).toEqual(3);
    expect(wrapper.find({ href: 'https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-drum-machine' }).exists());
  });
  it('hrefs defined', () => {
    const wrapper = shallow(<DeviceFooter />);
    expect(wrapper.find({ href: 'https://codepen.io/askov' }).exists());
  });
});

