import React from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NotificationItem }from '../components';
import { colors, gStyle,images } from '../constants';
// components
import NavigationBack from '../components/NavigationBack';
import { TextInput } from 'react-native-gesture-handler';
const imgMessageArea = __DEV__ ? 'imgMessageArea' : 'imgMessageArea';

const list = [
    {
        name: 'Pacco ',
        event: 'liked your picture',
    },
    {
        name: 'Babatunde ',
        event: 'viewed your profile',
    },
    {
        name: 'Anthony ',
        event: 'matched with you',
    },
    {
        name: 'Josh ',
        event: 'viewed your profile',
    },
    {
        name: 'Ifedola Akinse',
        event: 'matched with you',
    },
    {
        name: 'Pablo Paco',
        event: 'viewed your profile',
    },
    {
        name: 'Elizabeth',
        event: 'matched with you',
    },
    {
        name: 'Ayobami ',
        event: 'viewed your profile',
    },
    {
        name: 'Fabio ',
        event: 'matched with you',
    },
    {
        name: 'Jame ',
        event: 'viewed your profile',
    },
];

class NotificationScreen extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            search: null
        };
    }

    // Render any loading content that you like here
    render() {
        return (
            <SafeAreaView style={gStyle.flexOne}>

                <ScrollView scrollEventThrottle={16} >
                    <View style={{ marginTop: 18, paddingHorizontal: 20 }}>
                        {
                            list.map((item, i) => (
                                <NotificationItem
                                    key={i}
                                    imageUri={images[imgMessageArea]}
                                    name={item.name}
                                    event={item.event}
                                    time="Just now"
                                />
                            ))
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    };
}
NotificationScreen.navigationOptions = ({ navigation }) => ({
    headerLeft: <NavigationBack navigation={navigation} />,
    headerRight: <View style={{ flex: 1 }} />,
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center'
    },
    title: 'Notifications'
  });
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: 30
  },
  content:{ 
    flex: 1, 
    backgroundColor: 'white', 
    paddingTop: 20 ,
  },
  hSpacer:{  
    paddingHorizontal: 20 
  },
  contentTitle:{
    color: colors.grey,
    fontSize: 18,
    lineHeight: 40,
    letterSpacing: -0.8,
    fontFamily: 'worksans-semibold'
  },
});

export default NotificationScreen;
