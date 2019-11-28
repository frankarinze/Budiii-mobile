import React from 'react';
import {Image, ScrollView, View, Text, TextInput, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {colors, gStyle, images} from '../../constants';
import RNPickerSelect from 'react-native-picker-select';
import Touch from '../../components/Touch';

const icon = __DEV__ ? 'icon' : 'icon';


class RegistrationScreen extends React.Component {

    static navigationOptions = {
        header: null,
        tabBarVisible: false
    };

    constructor(props) {
        super(props);

        this.inputRefs = {
            genderSelector: null,
        };

        this.state = {
            titleText: "Let’s get started!",
            subTitle: 'Personalize your experience by providing your registration details.',
            forgotPassword: 'Forgot Password ?',
            alreadyRegistered: 'Already have an account? ',
            login: 'Login',
            email : '',
            emailPlaceholder : 'Email',
            password : '',
            passwordPlaceholder : 'Password',
            firstName : '',
            firstNamePlaceholder : 'First Name',
            lastName : '',
            lastNamePlaceholder : 'Last Name',
            gender: null,
            genderPlaceholder: 'Gender',
            genders: [
                {
                    label: 'Male',
                    value: 'male',
                },
                {
                    label: 'Female',
                    value: 'female',
                },
            ],
        };
    }

    // Render any loading content that you like here
    render() {
        return (
            <SafeAreaView style={gStyle.container}>
                <ScrollView contentContainerStyle={[gStyle.container, gStyle.containerMiddleJustify , gStyle.paddedContainer, {justifyContent: 'top',}]}>
                    <Image
                        style={[gStyle.logoSize ,{ alignSelf: 'center', marginBottom: 6, marginTop: 35 }]}
                        source={images[icon]}
                    />

                    <Text style={[gStyle.textHeaderOne]}>
                        {this.state.titleText}
                    </Text>

                    <Text style={[gStyle.subTitle, { marginLeft: 16, marginRight: 16, textAlign: 'center' , marginTop: 14 }]}>
                        {this.state.subTitle}
                    </Text>

                    <TextInput
                        style={[gStyle.authInputText, { marginTop: 20 } ]}
                        onChangeText={(firstName) => this.setState({firstName})}
                        value={this.state.firstName}
                        placeholderTextColor={ colors.inputText }
                        placeholder={this.state.firstNamePlaceholder}
                        returnKeyType={'next'}
                    />

                    <TextInput
                        style={[gStyle.authInputText, { marginTop: 18 } ]}
                        onChangeText={(lastName) => this.setState({lastName})}
                        value={this.state.lastName}
                        placeholderTextColor={ colors.inputText }
                        placeholder={this.state.lastNamePlaceholder}
                        returnKeyType={'next'}
                    />

                    <TextInput
                        style={[gStyle.authInputText, { marginTop: 18 } ]}
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                        placeholderTextColor={ colors.inputText }
                        placeholder={this.state.emailPlaceholder}
                        returnKeyType={'next'}
                    />

                    <TextInput
                        style={[gStyle.authInputText, { marginTop: 18 } ]}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        placeholderTextColor={ colors.inputText }
                        placeholder={this.state.passwordPlaceholder}
                        type={'password'}
                        returnKeyType={'next'}
                    />


                    <RNPickerSelect
                        placeholder={this.state.genderPlaceholder}
                        items={this.state.genders}
                        onValueChange={value => {
                            this.setState({
                                gender: value,
                            });
                        }}
                        style={pickerSelectStyles}
                        value={this.state.gender}
                        useNativeAndroidPickerStyle={false}
                        ref={el => {
                            this.inputRefs.genderSelector = el;
                        }}
                    />

                    <Text style={{textAlign: 'center', lineHeight: 20, marginTop: 16 }}>
                        <Text> By tapping login, you agree with our </Text>
                        <Text style={[gStyle.underline, gStyle.bold, { marginLeft: 10 }]}>Terms of Services</Text>
                        <Text> and </Text>
                        <Text style={[gStyle.underline, gStyle.bold]}>Privacy Policy</Text>
                    </Text>

                    <Touch
                        style={ [gStyle.loginButton, {marginTop: 32}] }
                        onPress={() => this.props.navigation.navigate('Recovery')}
                        text="Register"
                    />

                    {/*<Touch*/}
                    {/*    style={ [gStyle.loginButton, {marginTop: 11, backgroundColor: colors.Black, borderColor: colors.Black }] }*/}
                    {/*    onPress={() => this.props.navigation.navigate('Recovery')}*/}
                    {/*    text="Connect with Facebook"*/}
                    {/*/>*/}

                    <Text
                        style={[gStyle.noAccount , { marginBottom: 55 }]}
                        onPress={() => this.props.navigation.navigate('Login')}
                    >
                        <Text> { this.state.alreadyRegistered } </Text>
                        <Text style={[gStyle.text]}>{ this.state.login }</Text>
                    </Text>

                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    title : {
        fontSize: 30,
        alignSelf: 'center',
        color: 'red'
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        marginTop: 18,
        fontSize: 16,
        height: 48,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderWidth: 2,
        color: colors.inputText,
        borderColor: colors.inputGrey,
        borderRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1 ,
        shadowRadius: 4,
        elevation: 1,
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        marginTop: 18,
        height: 48,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderWidth: 0.5,
        color: colors.inputText,
        borderColor: colors.inputGrey,
        fontSize: 16,
        lineHeight: 20,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1 ,
        shadowRadius: 4,
        elevation: 1,
        fontFamily: 'worksans-medium',
        borderRadius: 8,
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});


export default RegistrationScreen;