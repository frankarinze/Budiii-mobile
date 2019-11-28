import React from 'react';
import renderer from 'react-test-renderer';

import DiscoverScreen from '../DiscoverScreen';

const navigation = {
  goBack: jest.fn(),
  navigate: jest.fn()
};

const tree = renderer.create(<DiscoverScreen navigation={navigation} />).toJSON();

describe('<DiscoverScreen />', () => {
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
