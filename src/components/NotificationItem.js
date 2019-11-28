import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import { gStyle ,colors} from '../constants';

class NotificationItem extends Component {

    render() {
        return (
            <View style={gStyle.list_container}>
                <Image source={this.props.imageUri} style={styles.user_img}/>
                <View style={{position:"absolute",width:15,height:15,backgroundColor:'#70EE75',borderRadius:50
            ,justifyContent:"center",alignItems:'center',left:65-(40/2),top:70-(40/2)
            ,}}></View>
                <View style={{flexDirection:"column",}}>
                    <View style={{flexDirection:"row"}}>
                    <Text style={[styles.active_name]}>{this.props.name}</Text>
                    <Text style={[styles.event_text]}>{this.props.event}</Text>
                    </View>
                    
                    <Text style={[styles.active_text]}>{this.props.time}</Text>
                </View>
                
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
    event_text:{
        marginTop:15,
        marginLeft:-8,
        fontWeight:'200'

    },
    active_text:{
        marginTop:10,
        marginHorizontal:15,
        opacity:0.5

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

    },
    user_img:{ 
        height:58, 
        width: 58,
        marginBottom: 6,
        marginTop: 10,
        resizeMode: 'cover' ,
       },
   
});

export default NotificationItem;