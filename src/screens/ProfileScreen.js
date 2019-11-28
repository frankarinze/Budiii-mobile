import React from 'react';
import {Image, ScrollView, View, Text, TextInput,Modal, StyleSheet} from 'react-native';
import { ListItem, Rating, AirbnbRating } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation';
import {colors, gStyle, images,ic_settings,ic_logout} from '../constants';
import Touch from '../components/Touch'
// components
import NavigationBack from '../components/NavigationBack';

const profilePic = __DEV__ ? 'profilePic' : 'profilePic';

class ProfileScreen extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            titleText: "Name",
            subTitle: 'johndoe@gmail.com',
          
        };
    }

    // Render any loading content that you like here
    render() { 
        return (
            <SafeAreaView style={gStyle.container}>
                <View style={[gStyle.container, gStyle.paddedContainer, { justifyContent: 'top' , height: 150 }]}>

                    <Image
                        style={{ alignSelf: 'center', height: 165, width: 165, marginBottom: 6, borderRadius: 82, marginTop: 33 }}
                        source={images[profilePic]}
                    />
               <View style={{marginTop:20,flexDirection:"row"}}>
               <Text style={styles.label}> Name </Text> 
               <Text style={[gStyle.h4,{marginHorizontal:10,}]}>Margie Doe </Text> 
               </View>
               <View style={styles.labelGroup}>
               <Text style={styles.label}> Username </Text>  
                     <Text style={[gStyle.h4,{marginHorizontal:10,}]}>Margie_doe </Text> 
               </View>
               <View style={styles.labelGroup}>
               <Text style={styles.label}> Age </Text> 
               <Text style={[gStyle.h4,{marginHorizontal:10,}]}>24 </Text> 
               </View>

               <View style={styles.labelGroup}>
               <Text style={styles.label}> Gender </Text> 
               <Text style={[gStyle.h4,{marginHorizontal:10,}]}>Female </Text> 
               </View>

               <View style={styles.labelGroup}>
               <Text style={styles.label}> Location </Text>
               <Text style={[gStyle.h4,{marginHorizontal:10,}]}>Lagos,Nigeria </Text> 
               </View>

               <View style={styles.labelGroup}>
               <Text style={styles.label}> Email </Text>
               <Text style={[gStyle.h4,{marginHorizontal:10,}]}>magiedoe@gmail.com </Text> 
               </View>

               <View style={styles.labelGroup}>
               <Text style={styles.label}> Height </Text>
               <Text style={[gStyle.h4,{marginHorizontal:10,}]}>5ft </Text> 
               </View>

               <View style={styles.labelGroup}>
               <Text style={styles.label}> Complexion </Text>
               <Text style={[gStyle.h4,{marginHorizontal:10,}]}>Fair </Text> 
               </View>

               <View style={styles.labelGroup}>
               <Text style={styles.label}> Status </Text>
               <Text style={[gStyle.h4,{marginHorizontal:10,}]}>Single </Text> 
               </View>

               <View style={styles.labelGroup}>
               <Touch
                style={ gStyle.loginButton }
                onPress={() => {this.setModalVisible(false)}}
                text="Edit Profile"
            />
               </View>

             
   </View>
            </SafeAreaView>
        )
    };
}

ProfileScreen.navigationOptions = ({ navigation }) => ({
  headerLeft: <NavigationBack navigation={navigation} />,
  headerRight: <View style={{ flex: 1 }} />,
  headerTitleStyle: {
    flex: 1,
    textAlign: 'center'
  },
  title: 'Profile'
});

const styles = StyleSheet.create({
  title : {
      flexDirection:"row",
        fontSize: 16,
        lineHeight: 25,
        fontFamily: 'worksans-semibold'
    },
    container : {
        borderColor: colors.divider,
        borderBottomWidth: 1
    },
    label:{fontWeight:"bold",fontSize:19,textAlign:"left",width:"40%",fontFamily:'worksans-semibold'},
    labelGroup:{flexDirection:"row",marginTop:10,alignContent:"flex-start"}

});

export default ProfileScreen;

