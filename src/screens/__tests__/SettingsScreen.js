import React from 'react';
import renderer from 'react-test-renderer';

import MyAccountScreen from '../MyAccountScreen';

const navigation = {
  goBack: jest.fn(),
  navigate: jest.fn()
};

const tree = renderer
  .create(<MyAccountScreen navigation={navigation} />)
  .toJSON();

describe('<MyAccountScreen />', () => {
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
