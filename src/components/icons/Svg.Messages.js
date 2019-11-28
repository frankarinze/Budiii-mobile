import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../constants';

const SvgMessages = ({ active, size }) => (
    <Svg  height={size} width={size} viewBox="0 0 20 20" fill="none" >
        <Path
            fill={active ? colors.brandPrimary : colors.black50 }
            d="M16.6666 1.66665H3.33329C2.41663 1.66665 1.66663 2.41665 1.66663 3.33331V18.3333L4.99996 15H16.6666C17.5833 15 18.3333 14.25 18.3333 13.3333V3.33331C18.3333 2.41665 17.5833 1.66665 16.6666 1.66665Z"
            stroke={ active ? colors.white : colors.white }
            stroke-opacity="0.54"
        />
    </Svg>
);

SvgMessages.defaultProps = {
  active: false,
  size: 20
};

SvgMessages.propTypes = {
  // optional
  active: PropTypes.bool,
  size: PropTypes.number
};

export default SvgMessages;
