import React from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
} from 'react-native';
import { MessageItem }from '../components';
import { colors, gStyle,images } from '../constants';
import { ListItem } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation';
// components
import NavigationBack from '../components/NavigationBack';

const profilePic = __DEV__ ? 'profilePic' : 'profilePic';

const list = [
    {
        title: 'Profile',
        screen: 'ProfileScreen'
    },
    {
        title: 'Discovery Preference',
        screen: 'DiscoveryPreferenceScreen'
    },
    {
        title: 'Notification',
        screen: 'NotificationScreen',
    },
];

class SettingsScreen extends React.Component {
    

    // Render any loading content that you like here
    render() {
        return (
         <SafeAreaView style={gStyle.container}>
                
                <View style={gStyle.container}>
                    {
                        list.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.title}
                                containerStyle={[styles.container]}
                                titleStyle={[styles.title]}
                                onPress={() => this.props.navigation.navigate(item.screen)}
                            />
                        ))
                    }
                </View>
            </SafeAreaView>
        );
    };
}

SettingsScreen.navigationOptions = ({ navigation }) => ({
  headerLeft: <NavigationBack navigation={navigation} />,
  headerRight: <View style={{ flex: 1 }} />,
  headerTitleStyle: {
    flex: 1,
    textAlign: 'center'
  },
  title: 'Settings'
});

const styles = StyleSheet.create({
  title : {
        fontSize: 16,
        lineHeight: 25,
        fontFamily: 'worksans-semibold'
    },
    container : {
        borderColor: colors.divider,
        borderBottomWidth: 1
    }

});

export default SettingsScreen;

