import React from 'react';
import renderer from 'react-test-renderer';

import SvgCircleLeft from '../Svg.CircleLeft';
import SvgCog from '../Svg.Cog';
import SvgDiscover from '../SvgDiscover';
import SvgMessages from '../SvgMessages';
import SvgStats from '../Svg.Stats';

describe('SVG Icons', () => {
  it('<SvgCircleLeft /> renders correctly', () => {
    const tree = renderer.create(<SvgCircleLeft />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('<SvgCog /> renders correctly', () => {
    const tree = renderer.create(<SvgCog />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('<SvgDiscover /> renders correctly', () => {
    const tree = renderer.create(<SvgDiscover />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('<SvgMessages /> renders correctly', () => {
    const tree = renderer.create(<SvgMessages />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('<SvgStats /> renders correctly', () => {
    const tree = renderer.create(<SvgStats />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
