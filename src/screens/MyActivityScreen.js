import React from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    Text,
    SafeAreaView
} from 'react-native';
import { MessageItem }from '../components';
import { colors, gStyle,images } from '../constants';
// components
import { TextInput } from 'react-native-gesture-handler';
import NavigationBack from '../components/NavigationBack';

class MyActivityScreen extends React.Component {

    // Render any loading content that you like here
    render() {
        return (
        <View style={gStyle.container}>
          <ScrollView contentContainerStyle={gStyle.contentContainer}>
            <Text style={gStyle.text}>My Activities</Text>
          </ScrollView>
        </View>
        );
    };
}

MyActivityScreen.navigationOptions = ({ navigation }) => ({
  headerLeft: <NavigationBack navigation={navigation} />,
  headerRight: <View style={{ flex: 1 }} />,
  headerTitleStyle: {
    flex: 1,
    textAlign: 'center'
  },
  title: 'My Activities'
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

});

export default MyActivityScreen;

