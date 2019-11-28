import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  SafeAreaView,
  Switch
} from 'react-native';
import { connect } from 'react-redux';
import { Ionicons, Foundation, FontAwesome } from '@expo/vector-icons';

import { setFilters } from '../modules/budiiFilter';
import {colors, gStyle, } from '../constants';
import NavigationBack from '../components/NavigationBack';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomMarker from '../components/CustomMarker';
const { width, height } = Dimensions.get('screen');


class DiscoveryPreferenceScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    sort: 'men',
    type: 'all',
    price: 'free',
    option_full: true,
    option_rated: true,
    option_free: false,
    sliderOneChanging: false,
    sliderOneValue: [0],
    sliderTwoValue: [6],
    multiSliderValue: [12, 21],
    nonCollidingMultiSliderValue: [0, 100],
  }

sliderOneValuesChangeStart = () => {
    this.setState({
        sliderOneChanging: true,
    });
};

sliderOneValuesChange = values => {
    let newValues = [0];
    newValues[0] = values[0];
    this.setState({
        sliderOneValue: newValues,
    });
};

sliderOneValuesChangeFinish = () => {
    this.setState({
        sliderOneChanging: false,
    });
};

multiSliderValuesChange = values => {
    this.setState({
        multiSliderValue: values,
    });
};

nonCollidingMultiSliderValuesChange = values => {
    this.setState({
        nonCollidingMultiSliderValue: values,
    });
};

  renderHeader() {
    return (
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Campings')}>
            <Ionicons name="md-arrow-back" size={24} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.title}>Discovery Preference </Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
        </View>
      </View>
    )
  }

  render() {
    const {
      sort,
      type,
    } = this.props.filters;

    const activeType = (key) => type === key;

    return (
      <SafeAreaView style={styles.container}>
          <View style={{height: height * 0.03,}}></View>
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <View>
              <Text style={styles.title}>Select Gender</Text>
            </View>
            <View style={styles.group}>
              <TouchableOpacity
                style={[styles.button, styles.first, sort === 'men' ? styles.active : null]}
                onPress={() => this.props.setFilters({ sort: 'men' })}
              >
                <Text style={[styles.buttonText, sort === 'men' ? styles.activeText : null]}>Men</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, sort === 'ratings' ? styles.active : null]}
                onPress={() => this.props.setFilters({ sort: 'ratings' })}
              >
                <Text style={[styles.buttonText, sort === 'ratings' ? styles.activeText : null]}>Women</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.last, sort === 'reviews' ? styles.active : null]}
                onPress={() => this.props.setFilters({ sort: 'reviews' })}
              >
                <Text style={[styles.buttonText, sort === 'reviews' ? styles.activeText : null]}>Both</Text>
              </TouchableOpacity>
            </View>
          </View>

          

          <View style={styles.section}>
            <View>
              <Text style={styles.title}>Age Range</Text>
                  <MultiSlider
                       selectedStyle={{backgroundColor: colors.brandPrimary, }}
                        unselectedStyle={{ backgroundColor: 'silver',}}
                        trackStyle={{height: 3,backgroundColor: 'red',}}
                        touchDimensions={{height: 40,marginTop:50,width: 40,
                          slipDisplacement: 40,  }}
                        sliderLength={width * 0.92}
                        customMarker={CustomMarker}
                        values={[
                          this.state.multiSliderValue[0],
                          this.state.multiSliderValue[1],
                      ]}
                      onValuesChange={this.multiSliderValuesChange}
                      min={0}
                      max={40}
                      step={1}
                      allowOverlap
                      snapped
                     
                      
                    />
                     
                    <View style={styles.sliderOne}>
                        <Text style={{position: "relative",width: 13,height: 5,
        left: 0,top: 0,backgroundColor: "#2CC1DA",}}>testing</Text>
                        <Text style={styles.text}>{this.state.multiSliderValue[0]} </Text>
                    <Text style={styles.text}>{this.state.multiSliderValue[1]}</Text>
                    </View>

            </View>
            </View>

          <View style={styles.section}>
            <View>
              <Text style={styles.title}> Distance (km) </Text>
            </View>
          </View>
          <View style={styles.section}>
            <View>
              <Text style={styles.title}> Complexion</Text>
            </View>
          </View>
          <View style={styles.section}>
            <View>
              <Text style={styles.title}> feight</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
DiscoveryPreferenceScreen.navigationOptions = ({ navigation }) => ({
    headerLeft: <NavigationBack navigation={navigation} />,
    headerRight: <View style={{ flex: 1 }} />,
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center'
    },
    title: 'Discovery Preference'
  });

const moduleState = state => ({
  filters: state.budiiFilter.filters,
  loading: state.budiiFilter.loading,
});

const moduleActions = {
  setFilters,
}

export default connect(moduleState, moduleActions)(DiscoveryPreferenceScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.1,
    width: width,
    paddingHorizontal: 14,
  },
  section: {
    flexDirection: 'column',
    marginHorizontal: 14,
    marginBottom: 14,
    paddingBottom: 24,
    borderBottomColor: '#EAEAED',
    borderBottomWidth: 0,
  },
  title: {
    fontSize: 18,
    marginVertical: 14,
  },
  group: {
    flexDirection: 'row',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.brandPrimary,
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    padding: 14,
    alignContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '500',
  },
  active: {
    backgroundColor: colors.brandPrimary,
  },
  activeText: {
    color: '#FFF'
  },
  first: {
    borderTopLeftRadius: 13,
    borderBottomLeftRadius: 13,
  },
  last: {
    borderTopRightRadius: 13,
    borderBottomRightRadius: 13,
  },
  option: {
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sliders: {
    margin: 20,
    width: 280,
},
text: {
    alignSelf: 'center',
    paddingVertical: 20,
},
sliderOne: {
    flexDirection: 'row',
    justifyContent: 'space-around',
},
  
});
