import React from 'react';
import {Image, ScrollView, View, Text, TextInput, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {colors, gStyle, images} from '../../constants';
import Touch from '../../components/Touch';

const icon = __DEV__ ? 'icon' : 'icon';


class VerifyScreen extends React.Component {

    static navigationOptions = {
        header: null,
        tabBarVisible: false
    };

    constructor(props) {
        super(props);
        this.state = {
            titleText: "Check your email",
            subTitle: 'We’ve sent a code to your email. Once you receive the code, enter it below to reset your password.',
            forgotPassword: 'I didn’t receive the mail.',
            register: 'Register',
            code : '',
            codePlaceholder : '0',
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

                        <Text style={[gStyle.subTitle, { marginLeft: 30, marginRight: 30, textAlign: 'center' , marginTop: 14 }]}>
                            {this.state.subTitle}
                        </Text>

                        
                        <View style={gStyle.alignHorizontal}>

                        <TextInput
                            style={[gStyle.verifyTextInput, { marginTop: 50 } ]}
                            onChangeText={(code) => this.setState({code})}
                            value={this.state.code}
                            maxLength={1}
                            KeyboardType='numeric'
                            ref='one'
                            placeholderTextColor={ colors.inputText }
                            placeholder={this.state.codePlaceholder}
                            returnKeyType={'next'}
                        />

                        <TextInput
                            style={[gStyle.verifyTextInput, { marginTop: 50 } ]}
                            onChangeText={(code) => this.setState({code})}
                            value={this.state.code}
                            ref='two'
                            placeholderTextColor={ colors.inputText }
                            placeholder={this.state.codePlaceholder}
                            returnKeyType={'next'}
                        />

                         <TextInput
                            style={[gStyle.verifyTextInput, { marginTop: 50 } ]}
                            onChangeText={(code) => this.setState({code})}
                            value={this.state.code}
                            placeholderTextColor={ colors.inputText }
                            placeholder={this.state.codePlaceholder}
                            returnKeyType={'next'}
                        />

                         <TextInput
                            style={[gStyle.verifyTextInput, { marginTop: 50 } ]}
                            onChangeText={(code) => this.setState({code})}
                            value={this.state.code}
                            placeholderTextColor={ colors.inputText }
                            placeholder={this.state.codePlaceholder}
                            returnKeyType={'next'}
                        />

                         <TextInput
                            style={[gStyle.verifyTextInput, { marginTop: 50 } ]}
                            onChangeText={(code) => this.setState({code})}
                            value={this.state.code}
                            placeholderTextColor={ colors.inputText }
                            placeholder={this.state.codePlaceholder}
                            returnKeyType={'next'}
                        />
                        </View>

                        <Touch
                            style={ gStyle.loginButton }
                            onPress={() => this.props.navigation.navigate('ResetPasswordScreen')}
                            text="Submit"
                        />

                        <Text
                            style={[gStyle.forgotPassword , gStyle.text,  { marginTop: 28, textAlign: 'left'} ]}
                            onPress={() => this.props.navigation.navigate('MessagesDetails')}
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

export default VerifyScreen;