import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, Rect } from 'react-native-svg';
import { colors } from '../../constants';

const SvgDiscover = ({ active, size }) => (
    <Svg  height={size} width={size} viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Rect x="5" y="4" width="10.6667" height="16" rx="1"  fill={ active ? colors.brandPrimary : colors.grey} />
        <Rect x="4.5" y="3.5" width="11.6667" height="17" rx="1.5" stroke="black" stroke-opacity="0.54"/>
        <Rect x="4.5" y="3.5" width="11.6667" height="17" rx="1.5" stroke="#757575" stroke-opacity="0.54"/>
        <Rect width="8.53778" height="14" rx="1" transform="matrix(0.848824 0.528676 -0.528681 0.848821 14.7529 4)"  fill={active ? colors.brandPrimary : colors.grey} />
        <Rect x="-0.160071" y="-0.688748" width="9.53778" height="15" rx="1.5" transform="matrix(0.848824 0.528676 -0.528681 0.848821 14.3646 3.9805)" stroke="black" stroke-opacity="0.54"/>
        <Rect x="-0.160071" y="-0.688748" width="9.53778" height="15" rx="1.5" transform="matrix(0.848824 0.528676 -0.528681 0.848821 14.3646 3.9805)" stroke="#757575" stroke-opacity="0.54"/>
    </Svg>
);

SvgDiscover.defaultProps = {
  active: false,
  size: 20
};

SvgDiscover.propTypes = {
  // optional
  active: PropTypes.bool,
  size: PropTypes.number
};

export default SvgDiscover;
