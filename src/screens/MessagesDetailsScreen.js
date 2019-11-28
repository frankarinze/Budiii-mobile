import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { gStyle } from '../constants';

// components
import NavigationBack from '../components/NavigationBack';

const MessagesDetailsScreen = () => (
  <View style={gStyle.container}>
    <ScrollView contentContainerStyle={gStyle.contentContainer}>
      <Text style={gStyle.text}>Multi Screens :: Level 2 Content Area</Text>
    </ScrollView>
  </View>
);

MessagesDetailsScreen.navigationOptions = ({ navigation }) => ({
  headerLeft: <NavigationBack navigation={navigation} />,
  headerRight: <View style={{ flex: 1 }} />,
  headerTitleStyle: {
    flex: 1,
    textAlign: 'center'
  },
  title: 'Listing Details'
});

export default MessagesDetailsScreen;
