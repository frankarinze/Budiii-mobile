import React from 'react';
import {Image, ScrollView, View, Text, TextInput, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {colors, gStyle, images} from '../../constants';
import DiscoverScreen from "../DiscoverScreen";
import Touch from '../../components/Touch';

const icon = __DEV__ ? 'icon' : 'icon';


class LoginScreen extends React.Component {

    static navigationOptions = {
        header: null,
        tabBarVisible: false
    };

    constructor(props) {
        super(props);
        this.state = {
            titleText: "Welcome Back!",
            subTitle: 'Kindly login with your personal information by email address and password.',
            forgotPassword: 'Forgot Password ?',
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
                    <Image
                        style={[gStyle.logoSize,{ alignSelf: 'center', marginBottom: 6 }]}
                        source={images[icon]}
                    />

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

                        <TextInput
                            style={[gStyle.authInputText, { marginTop: 29 } ]}
                            onChangeText={(password) => this.setState({password})}
                            value={this.state.password}
                            placeholderTextColor={ colors.inputText }
                            type={'password'}
                            returnKeyType={'done'}
                        />

                        <Text
                            style={[gStyle.forgotPassword ]}
                            onPress={() => this.props.navigation.navigate('Recovery')}
                        >
                            { this.state.forgotPassword }
                        </Text>

                        <Text style={{textAlign: 'center', lineHeight: 20}}>
                            <Text> By tapping login, you agree with our </Text>
                            <Text style={[gStyle.underline, gStyle.bold, { marginLeft: 10 }]}>Terms of Services</Text>
                            <Text> and </Text>
                            <Text style={[gStyle.underline, gStyle.bold]}>Privacy Policy</Text>
                        </Text>

                        <Touch
                            style={ gStyle.loginButton }
                            onPress={() => this.props.navigation.navigate('Discover')}
                            text="Login"
                        />

                        <Text
                            style={[gStyle.noAccount ]}
                            onPress={() => this.props.navigation.navigate('Register')}
                        >
                            <Text> { this.state.noAccountText } </Text>
                            <Text style={[gStyle.text]}>{ this.state.register }</Text>
                        </Text>

                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({

});

export default LoginScreen;