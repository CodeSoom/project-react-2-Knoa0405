import React from 'react';

import Adapter from 'enzyme-adapter-react-16';

import { shallow, configure } from 'enzyme';

import { matchers } from '@emotion/jest';

import LogoContainer from '../LogoContainer';

configure({ adapter: new Adapter() });

expect.extend(matchers);

describe('LogoContainer', () => {
  it('renders an logo image', () => {
    const logo = shallow(<LogoContainer />);

    expect(logo.props('src')).toEqual({ src: 'test-file-stub' });
  });
});
