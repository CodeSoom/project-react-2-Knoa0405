import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import TalentInputContainer from '../TalentInputContainer';

jest.mock('react-redux');

describe('TalentInputContainer', () => {
  const dispatch = useDispatch();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders buttons', () => {
    const { getByText } = render(<TalentInputContainer />);

    expect(getByText('백엔드')).not.toBeNull();
    expect(getByText('프론트엔드')).not.toBeNull();
  });
});
