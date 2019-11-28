import React from 'react';
import {Image, ScrollView, View, Text, TextInput,Modal, TouchableHighlight,StyleSheet} from 'react-native';
import { ListItem ,Rating,AirbnbRating} from 'react-native-elements'
import { SafeAreaView } from 'react-navigation';
import {colors, gStyle, images,ic_settings,ic_logout} from '../constants';
import Touch from '../components/Touch'

const profilePic = __DEV__ ? 'profilePic' : 'profilePic';

// var startModal = function () {
//     console.log("Start Modal clicked!");
// }
const list = [
    
    {
        title: 'My Activities',
        icon: 'favorite',
        screen: 'me'
    },
    {
        title: 'Settings',
        icon:'settings',
        screen: 'SettingsScreen'
    },
    {
        title: 'Rate budii',
        icon: 'thumb-up',
        screen: null,
    },
    {
        title: 'Logout',
        icon: 'power-settings-new',
        screen: 'MessagesDetails',
    },
];

class MyAccountScreen extends React.Component {

    static navigationOptions = {
        title: "My Account",
        tabBarVisible: false
    };

    constructor(props) {
        super(props);
        this.state = {
            titleText: "Optimus Prime",
            subTitle: 'Lagos, Nigeria',
            modalVisible:false,

        };
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
    ratingCompleted(rating) {
      console.log("Rating is: " + rating)
    }
     
    // Render any loading content that you like here
    render() {
   
     startModal = () => {
     // this.props.navigation.navigate('MessagesDetails')
     this.setModalVisible(!this.state.modalVisible)
    }
    
        
        return (
            <SafeAreaView style={gStyle.container}>
                <View style={[gStyle.container, gStyle.containerMiddleJustify , gStyle.paddedContainer, { justifyContent: 'top' , height: 150 }]}>

                    <Image
                        style={{ alignSelf: 'center', height: 165, width: 165, marginBottom: 6, borderRadius: 82, marginTop: 33 }}
                        source={images[profilePic]}
                    />

                    <Text style={[gStyle.textHeaderOne]}>
                        {this.state.titleText}
                    </Text>

                    <Text style={[gStyle.subTitle, { marginLeft: 30, marginRight: 30, textAlign: 'center' }]}>
                        {this.state.subTitle}
                    </Text>

                    <Text
                        style={[gStyle.forgotPassword , gStyle.text,  { marginTop: 28, textAlign: 'left'} ]}
                        onPress={() => this.props.navigation.navigate('MessagesDetails')}
                    >
                        { this.state.forgotPassword }
                    </Text>
                    <Modal
            style={{ position:"relative",backgroundColor:"black"}}
             animationType="slide"
             transparent={true}
             visible={this.state.modalVisible}
             onRequestClose={() => {this.setModalVisible(false)}}
         >
         <View 
            onPressOut={() => {this.setModalVisible(false)}}
            style={gStyle.ModalContainer}> 
            
         <View style={gStyle.ModalContent}>
            <View style={{flex:1,paddingHorizontal:20,justifyContent:"center",alignItems:"center"}}>
            <Text style={[gStyle.subTitle, { marginLeft: 30, 
                marginRight: 30, textAlign: 'center' }]}> How would
                    you like to rate us ?</Text> 

            <AirbnbRating />

            <Touch
                style={ gStyle.loginButton }
                onPress={() => {this.setModalVisible(false)}}
                text="OK"
            />
            </View>

          </View>
         </View>
     </Modal>

                </View>

                <View style={gStyle.container}>
                    {
                        list.map((item, i) => 
                        
                        (  
                            <ListItem
                            
                                key={i}
                                title={item.title}
                                leftIcon={{ name: item.icon ,color:colors.brandPrimary}}
                                rightIcon={{ name: 'navigate-next'}}
                                containerStyle={[styles.container]}
                                titleStyle={[styles.title]}
                                onPress={() => this.props.navigation.navigate(item.screen)}
                                // onPress={ () => {item :'me'? console.log('its a nav') : console.log('not a nav') }}
                            />
                        ))
                    }
                   <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
          
        </TouchableHighlight>
                </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    title : {
        fontSize: 16,
        lineHeight: 16,
        fontFamily: 'worksans-semibold'
    },
    container : {
        borderColor: colors.divider,
        borderBottomWidth: 1
    }
});

export default MyAccountScreen;
