import React from 'react';
import { VolumeDisplay } from './VolumeDisplay';
import { shallow } from 'enzyme';

describe('<VolumeDisplay />', () => {
  const volume = 80;
  const power = false;
  it('display renders text', () => {
    const wrapper = shallow(<VolumeDisplay power={power} volume={volume} />);
    expect(wrapper.find('.volume-display').text()).toEqual('Volume: 80 %');
  });
  it('display off', () => {
    const wrapper = shallow(<VolumeDisplay power={power} volume={volume} />);
    expect(wrapper.find('.volume-display').hasClass('volume-display--on')).toEqual(false);
  });
  it('display on', () => {
    const power = true;
    const wrapper = shallow(<VolumeDisplay power={power} volume={volume} />);
    expect(wrapper.find('.volume-display').hasClass('volume-display--on')).toEqual(true);
  });
});

