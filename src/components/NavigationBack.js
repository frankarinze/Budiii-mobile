import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { gStyle } from '../constants';

// grab icon
import Icon from 'react-native-vector-icons/Ionicons';

const NavigationBack = ({ navigation }) => (
  <TouchableOpacity
    accessible
    accessibilityLabel="go back"
    accessibilityComponentType="button"
    accessibilityTraits="button"
    activeOpacity={gStyle.activeO}
    onPress={() => navigation.goBack(navigation.state.key)}
    style={{ paddingHorizontal: 16, paddingVertical: 8 }}
  >
   <Icon name="ios-arrow-back" size={20}  />
   
  </TouchableOpacity>
);

NavigationBack.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default NavigationBack;
