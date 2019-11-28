import React from 'react';
import {Image, ScrollView, View, Text,TouchableOpacity,StyleSheet} from 'react-native';
import { ListItem } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation';
import {colors, gStyle, images} from '../constants';
import Touch from '../components/Touch';
import NavigationBack from '../components/NavigationBack';

const profilePic = __DEV__ ? 'profilePic' : 'profilePic';
const ic_heart = __DEV__ ? 'ic_heart' : 'ic_heart';
const ic_comment = __DEV__ ? 'ic_comment' : 'ic_comment';
const ic_arrow_heart = __DEV__ ? 'ic_arrow_heart' : 'ic_arrow_heart';
const ic_star = __DEV__ ? 'ic_star' : 'ic_star';
const ic_filter = __DEV__ ? 'ic_filter' : 'ic_filter';
const ic_notification = __DEV__ ? 'ic_notification' : 'ic_notification';

// grab icon
import Icon from 'react-native-vector-icons/Ionicons';


class DiscoverScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      titleText: "Optimus Prime, 23",
      subTitle: 'Lagos, Nigeria',
    };
  }

  // Render any loading content that you like here
  render() {
    return (
        <SafeAreaView style={[gStyle.container, { backgroundColor: colors.brandPrimary }]}>
          <View style={[gStyle.container, { margin: 16, borderRadius: 4 , height: 436 }]}>

            <Image
                style={{ alignSelf: 'center', height: 470, width: '100%', marginTop: 0 }}
                source={images[profilePic]}
            />

            <Text style={[gStyle.textHeaderOne, { width: '100%', textAlign: 'center', marginTop: 55}]}>
              {this.state.titleText}
            </Text>

            <Text style={[gStyle.subTitle, { marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>
              {this.state.subTitle}
            </Text>

            <View style={[styles.container]}>
            <View style={[styles.dropShadow,{backgroundColor:'white', height:60,width: 60, margin: 5, borderRadius: 40,justifyContent:"center" }]}>
              <Image
                  style={{ height: 20, width: 25,alignSelf:"center"  }}
                  source={images[ic_heart]}
              />
              </View>
              <View style={[styles.dropShadow,{backgroundColor:'white', height:80,width: 80, margin: 5, borderRadius: 40,justifyContent:"center" }]}>
              <Image
                  style={{ height: 35, width: 35,alignSelf:"center" }}
                  source={images[ic_comment]}
              />
              </View>
              <View style={[styles.dropShadow,{backgroundColor:'white', height:80,width: 80, margin: 5, borderRadius: 40,justifyContent:"center" }]}>
              <Image
                  style={{ height: 40, width: 50,  alignSelf:"center" }}
                  source={images[ic_arrow_heart]}
              />
              </View>
              
              <View style={[styles.dropShadow,{backgroundColor:'white', height:60,width: 60, margin: 5, borderRadius: 40,justifyContent:"center" }]}>
              <Image
                  style={{ height: 20, width: 25,alignSelf:"center"  }}
                  source={images[ic_star]}
              />
              </View>
            </View>

          </View>
          <View style={styles.spacer}></View>

        </SafeAreaView>
    );
  }
}

DiscoverScreen.navigationOptions = ({ navigation }) => ({
  headerLeft: 
  <View style={{ flex: 1,flexDirection:"row" }} >
  <TouchableOpacity
  accessible
  accessibilityLabel="go back"
  accessibilityComponentType="button"
  accessibilityTraits="button"
  activeOpacity={gStyle.activeO}
  onPress={() => navigation.goBack(navigation.state.key)}
  style={{ paddingHorizontal: 16, paddingVertical: 8 }}
>
 <Icon name="ios-refresh" color={'white'} size={20}  />
 
</TouchableOpacity>
  
</View>
  ,
  headerRight:
  <View style={{ flex: 1,flexDirection:"row" }} >
  <TouchableOpacity
  accessible
  accessibilityLabel="go back"
  accessibilityComponentType="button"
  accessibilityTraits="button"
  activeOpacity={gStyle.activeO}
  onPress={() => navigation.goBack(navigation.state.key)}
  style={{ paddingHorizontal: 8, paddingVertical: 8 }}
>
<Image source={images[ic_filter]} style={{height:15,width:22,marginTop:6}} />

</TouchableOpacity>
  <TouchableOpacity
  accessible
  accessibilityLabel="go back"
  accessibilityComponentType="button"
  accessibilityTraits="button"
  activeOpacity={gStyle.activeO}
  onPress={() => navigation.goBack(navigation.state.key)}
  style={{ paddingHorizontal: 10,marginRight:5, paddingVertical: 8 }}
>
 <Image source={images[ic_notification]} style={{height:26,width:18}}  />
 
</TouchableOpacity>
</View>,
  headerTitleStyle: {
    flex: 1,
    textAlign: 'center',
    color:'white'
  },
  headerStyle: {
    backgroundColor: colors.brandPrimary60
  },
  title: 'Discover'
});

const moduleState = state => ({
filters: state.budiiFilter.filters,
loading: state.budiiFilter.loading,
});

const styles = StyleSheet.create({
  title : {
    fontSize: 16,
    lineHeight: 16,
    fontFamily: 'worksans-semibold'
  },
  container : {
    flexDirection:"row",
    width: '100%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top:  440,
  },
  spacer:{
    flex:0.15
  },
  dropShadow:{
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,  
    elevation: 2
  }
 
});

export default DiscoverScreen;

