import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import { colors, gStyle} from '../constants';
class OnlineUserList extends Component {
    render() {
        return (
            <View style={gStyle.users_container}>
                    <Image source={this.props.imageUri}
                    style={gStyle.user_img}/>
                <Text style={[gStyle.subTitle]}>{this.props.name}</Text>
                
            </View>
 
        );
    }
}
export default OnlineUserList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
   
});