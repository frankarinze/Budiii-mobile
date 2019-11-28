import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import { gStyle } from '../constants';

class MessageItem extends Component {

    render() {
        return (
            <View style={gStyle.list_container}>
                <Image source={this.props.imageUri} style={gStyle.user_img}/>
                <View style={{flexDirection:"column",}}>
                    <Text style={[styles.active_name]}>{this.props.name}</Text>
                    <Text style={[styles.active_text]}>{this.props.text}</Text>
                </View>
                <Text style={[styles.active_time]}>{this.props.time}</Text>
                <Text style={[styles.inactive_time]}>{this.props.inactive_time}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    active_name:{
        marginTop:15,
        marginHorizontal:15,
        fontWeight:'500'

    },
    active_text:{
        marginTop:10,
        marginHorizontal:15,
        fontWeight:'500',

    },
    active_time:{
        marginTop:15,
        marginHorizontal:60,
        opacity:0.5

    },
    inactive_time:{
        marginTop:15,
        marginHorizontal:60,
        opacity:0.5

    }
   
});

export default MessageItem;