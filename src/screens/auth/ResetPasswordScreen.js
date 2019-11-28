import React from 'react';
import {Image, ScrollView, View, Text, TextInput, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {colors, gStyle, images} from '../../constants';
import DiscoverScreen from "../DiscoverScreen";
import Touch from '../../components/Touch';

const icon = __DEV__ ? 'icon' : 'icon';


class ResetPasswordScreen extends React.Component {

    static navigationOptions = {
        header: null,
        tabBarVisible: false
    };

    constructor(props) {
        super(props);
        this.state = {
            titleText: "Reset Password",
            subTitle: 'Enter your new password.',
            newPassword : '',
            confirmNewPassword : '',
            confirmNewPasswordPlaceholder:'Confirm new password',
            newPasswordPlaceholder:'New password',
            
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

                        <Text style={[gStyle.subTitle, { marginLeft: 16, marginRight: 16, textAlign: 'center' , marginTop: 12 }]}>
                            {this.state.subTitle}
                        </Text>

                        <TextInput
                            style={[gStyle.authInputText, { marginTop: 20 } ]}
                            onChangeText={(newPassword) => this.setState({newPassword})}
                            value={this.state.newPassword}
                            placeholderTextColor={ colors.inputText }
                            placeholder={this.state.newPasswordPlaceholder}
                            type={'password'}
                            returnKeyType={'next'}
                        />
                        <TextInput
                            style={[gStyle.authInputText, { marginTop: 20} ]}
                            onChangeText={(confirmNewPassword) => this.setState({confirmNewPassword})}
                            value={this.state.confirmNewPassword}
                            placeholderTextColor={ colors.inputText }
                            placeholder={this.state.confirmNewPasswordPlaceholder}
                            type={'password'}
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

export default ResetPasswordScreen;