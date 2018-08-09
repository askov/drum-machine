import React from 'react';
import DeviceFooter from './DeviceFooter';
import { shallow } from 'enzyme';

it('renders', () => {
  const wrapper = shallow(<DeviceFooter />);
  expect(wrapper.find('p').text()).toEqual('');
});