import React from 'react';
import { Display } from './Display';
import { shallow } from 'enzyme';

describe('<Display />', () => {
  const text = 'test';
  const power = false;
  it('display renders text', () => {
    const wrapper = shallow(<Display power={power} text={text} />);
    expect(wrapper.find('.drum-display').text()).toEqual('test');
  });
  it('display off', () => {
    const wrapper = shallow(<Display power={power} text={text} />);
    expect(wrapper.find('.drum-display').hasClass('drum-display--on')).toEqual(false);
  });
  it('display on', () => {
    const power = true;
    const wrapper = shallow(<Display power={power} text={text} />);
    expect(wrapper.find('.drum-display').hasClass('drum-display--on')).toEqual(true);
  });
});

