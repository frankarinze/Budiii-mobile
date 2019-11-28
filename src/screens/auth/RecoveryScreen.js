import React from 'react';
import {Image, ScrollView, View, Text, TextInput, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {colors, gStyle, images} from '../../constants';
import DiscoverScreen from "../DiscoverScreen";
import Touch from '../../components/Touch';

const icon = __DEV__ ? 'icon' : 'icon';


class RecoveryScreen extends React.Component {

    static navigationOptions = {
        header: null,
        tabBarVisible: false
    };

    constructor(props) {
        super(props);
        this.state = {
            titleText: "Find your account",
            subTitle: 'Enter email associated with your account.',
            forgotPassword: 'I don’t have access to this.',
            noAccountText: 'Don’t have an account ? ',
            register: 'Register',
            email : '',
            password : '',
            emailPlaceholder : 'Email',
        };
    }

    // Render any loading content that you like here
    render() {
        return (
            <SafeAreaView style={gStyle.container}>
                <ScrollView contentContainerStyle={[gStyle.container, gStyle.containerMiddleJustify , gStyle.paddedContainer]}>

                        <Text style={[gStyle.textHeaderOne]}>
                            {this.state.titleText}
                        </Text>

                        <Text style={[gStyle.subTitle, { marginLeft: 16, marginRight: 16, textAlign: 'center' , marginTop: 14 }]}>
                            {this.state.subTitle}
                        </Text>

                        <TextInput
                            style={[gStyle.authInputText, { marginTop: 50 } ]}
                            onChangeText={(email) => this.setState({email})}
                            value={this.state.email}
                            placeholderTextColor={ colors.inputText }
                            placeholder={this.state.emailPlaceholder}
                            returnKeyType={'next'}
                        />

                        <Touch
                            style={ gStyle.loginButton }
                            onPress={() => this.props.navigation.navigate('Verify')}
                            text="Submit"
                        />

                        <Text
                            style={[gStyle.forgotPassword , gStyle.text,  { marginTop: 28, textAlign: 'left'} ]}
                            onPress={() => this.props.navigation.navigate('MultiLevel2')}
                        >
                            { this.state.forgotPassword }
                        </Text>


                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({

});

export default RecoveryScreen;