import React from 'react';
import { HoldButton } from './HoldButton';
import { shallow } from 'enzyme';
import sinon from 'sinon';

describe('<HoldButton />', () => {

  const testClass = 'test'

  it('prop class applies', () => {
    const wrapper = shallow(<HoldButton handleHold={() => { }} class={testClass} />);
    expect(wrapper.find(testClass).exists());
  });

  it('button hold function call counter', async () => {
    const obj = {
      func: function () { }
    };
    const spy = sinon.spy(obj, 'func');
    const wrapper = shallow(<HoldButton handleHold={obj.func} class={testClass} />);
    const btn = wrapper.find('div[role="button"]');
    btn.simulate('mouseDown');
    await new Promise(resolve => setTimeout(resolve, 1000));
    btn.simulate('mouseUp');
    expect(spy.callCount).toEqual(19);
  });
});

