import React from 'react';
import { StyleSheet, Image } from 'react-native';

class CustomMarker extends React.Component {
  render() {
    return (
      <Image
        style={styles.image}
        source={
          this.props.pressed ? require('../assets/ic/slider_ic.png') : require('../assets/ic/slider_ic.png')
        }
        resizeMode="contain"
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
  
    height: 35,
    width: 35,
  },
});

export default CustomMarker;