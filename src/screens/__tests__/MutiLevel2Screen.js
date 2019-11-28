import React from 'react';
import renderer from 'react-test-renderer';

import MessagesDetailsScreen from '../MultiLevel2Screen';

const navigation = {
  goBack: jest.fn(),
  navigate: jest.fn()
};

const tree = renderer
  .create(<MessagesDetailsScreen navigation={navigation} />)
  .toJSON();

describe('<MultiLevel2Screen />', () => {
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
