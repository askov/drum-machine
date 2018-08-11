import React from 'react';
import { HoldButton } from './HoldButton';
import { shallow } from 'enzyme';

describe('<HoldButton />', () => {

  const testClass = 'test'
  const testFunc = () => {
    console.log('test');
  };

  it('prop class applies', () => {
    const wrapper = shallow(<HoldButton handleHold={testFunc} class={testClass} />);
    expect(wrapper.find(testClass).exists());
  });
});

