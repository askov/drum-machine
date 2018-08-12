import React from 'react';
import { PowerButton } from './PowerButton';
import { shallow } from 'enzyme';
import sinon from 'sinon';

describe('<PowerButton />', () => {
  let wrapper, spy;

  beforeEach(() => {
    const obj = {
      func: function () { }
    };
    spy = sinon.spy(obj, 'func');
    wrapper = shallow(
      <PowerButton
        buttonClass={'test'}
        handlePowerClick={obj.func}
      />
    );
  });

  it('checks click events', () => {
    const btn = wrapper.find('div[role="button"]');
    btn.exists();
    btn.simulate('click');
    btn.simulate('click');
    expect(spy.callCount).toEqual(2);
  });

  it('renders SVG', () => {
    wrapper.find('svg').exits;
  });
});

