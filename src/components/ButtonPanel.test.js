import React from 'react';
import { ButtonPanel } from './ButtonPanel';
import { HoldButton } from './HoldButton';
import { PowerButton } from './PowerButton';

import { shallow } from 'enzyme';

describe('<ButtonPanel />', () => {

  const power = true;

  it('renders 2 <HoldButton /> and 1 <PowerButton /> components', () => {
    const wrapper = shallow(
      <ButtonPanel
        power={power}
        handleVolumeUp={() => { }}
        handleVolumeDown={() => { }}
        handlePowerClick={() => { }} />
    );
    expect(wrapper.find(PowerButton)).toHaveLength(1);
    expect(wrapper.find(HoldButton)).toHaveLength(2);
  });
});

