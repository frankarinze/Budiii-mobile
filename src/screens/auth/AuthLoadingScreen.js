import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage, Image,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import { gStyle, images } from '../../constants';
import {SafeAreaView} from "react-navigation";
const icon = __DEV__ ? 'icon' : 'icon';

class AuthLoadingScreen extends React.Component {

    static navigationOptions = {
        header: null,
        tabBarVisible: true
    };

    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View  style={[gStyle.container, gStyle.whiteBG, gStyle.containerMiddleJustify ]}>
                <Image
                    style={{ alignSelf: 'center', height: 120, width: 120, marginBottom: 25 }}
                    source={images[icon]}
                />
                <ActivityIndicator
                    size={'large'}
                />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

export default  AuthLoadingScreen;