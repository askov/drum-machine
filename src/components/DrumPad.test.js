import 'jsdom-global/register';
import React from 'react';
import { DrumPad } from './DrumPad';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import sinon from 'sinon';

describe('<DrumPad />', () => {
  const pad = {
    key: 'C',
    active: false,
    src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20OPHH.wav?1532352724689',
    name: 'OPHH'
  };

  const state = {
    volume: 42
  };
  const playAudio = () => { };

  const wrapper = mount(
    <DrumPad
      key={pad.key}
      volume={state.volume}
      pad={pad}
      play={playAudio} />
  );

  it('renders wrapper button correctrly', () => {
    expect(wrapper.find({ id: pad.name }).exists());
  });

  it('renders audio with className="clip" and id=key', () => {
    expect(wrapper.find({ id: pad.key }).name()).toEqual('audio');
    expect(wrapper.find({ id: pad.key }).prop('className')).toEqual('clip');
  });


  // it('button hold function call counter', async () => {
  //   const obj = {
  //     func: function () { }
  //   };
  //   const spy = sinon.spy(obj, 'func');
  //   const wrapper = shallow(<HoldButton handleHold={obj.func} class={testClass} />);
  //   const btn = wrapper.find('div[role="button"]');
  //   btn.simulate('mouseDown');
  //   await new Promise(resolve => setTimeout(resolve, 1000));
  //   btn.simulate('mouseUp');
  //   expect(spy.callCount).toEqual(19);
  // });
});

