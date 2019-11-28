import React from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MessageItem }from '../components';
import { colors, gStyle,images } from '../constants';
// components
import { TextInput } from 'react-native-gesture-handler';
const imgMessageArea = __DEV__ ? 'imgMessageArea' : 'imgMessageArea';

const list = [
    {
        name: 'Pacco Rabanne',
        message: 'OKay, Thanks for asking',
    },
    {
        name: 'Babatunde Akinse',
        message: 'OKay, Thanks for asking',
    },
    {
        name: 'Anthony Akinse',
        message: 'OKay, Thanks for asking',
    },
    {
        name: 'Josh Akinse',
        message: 'OKay, Thanks for asking',
    },
    {
        name: 'Ifedola Akinse',
        message: 'OKay, Thanks for asking',
    },
    {
        name: 'Pablo Paco',
        message: 'OKay, Thanks for asking',
    },
    {
        name: 'Elizabeth Swan',
        message: 'OKay, Thanks for asking',
    },
    {
        name: 'Ayobami Akinse',
        message: 'OKay, Thanks for asking',
    },
    {
        name: 'Fabio Casablanca',
        message: 'OKay, Thanks for asking',
    },
    {
        name: 'Jame O\'kelly',
        message: 'OKay, Thanks for asking',
    },
];

class MessagesBaseScreen extends React.Component {

    static navigationOptions = {
        title: "Messages",
        tabBarVisible: true
    };

    constructor(props) {
        super(props);
        this.state = {
            search: null
        };
    }

    // Render any loading content that you like here
    render() {
        return (
            <SafeAreaView style={gStyle.flexOne}>

                <View style={styles.searchBar}>
                    <View style={styles.searchContent}>
                        <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="Search"
                            placeholderTextColor="grey"
                            style={styles.searchTitle}
                            returnKeyType={'done'}
                        />
                    </View>
                </View>

                <ScrollView scrollEventThrottle={16} >
                    <View style={{ marginTop: 18, paddingHorizontal: 20 }}>
                        {
                            list.map((item, i) => (
                                <MessageItem
                                    key={i}
                                    imageUri={images[imgMessageArea]}
                                    name={item.name}
                                    text={item.message}
                                    time="Just now"
                                />
                            ))
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: 30
  },
  searchBar:{
    height: this.startHeaderHeight,
    backgroundColor: 'white',
  },
  searchContent:{
    flexDirection: 'row',
    paddingTop: 25,
    paddingBottom: 20,
    backgroundColor: 'white',
    marginHorizontal: 20,
    shadowOffset:
    {
        width: 0,
        height: 0
    },
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd' ,
    shadowColor: 'black',
  },
  ic_search:{
    resizeMode : 'stretch',
    alignItems: 'center',
    padding:10,
    paddingRight:2,
    paddingLeft:10,
  },
  searchTitle:{ 
    flex: 1, 
    fontWeight: '400', 
    backgroundColor: 'white'
  },
  content:{ 
    flex: 1, 
    backgroundColor: 'white', 
    paddingTop: 20 ,
  },
  hSpacer:{  
    paddingHorizontal: 20 
  },
  contentTitle:{
    color: colors.grey,
    fontSize: 18,
    lineHeight: 40,
    letterSpacing: -0.8,
    fontFamily: 'worksans-semibold'
  },
});

export default MessagesBaseScreen;
