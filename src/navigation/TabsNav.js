import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import PropTypes from 'prop-types';

// grab screens
import DiscoverScreen from '../screens/DiscoverScreen';
import MessagesBaseScreen from '../screens/MessagesBaseScreen';
import MessagesDetailsScreen from '../screens/MessagesDetailsScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import MyActivityScreen from '../screens/MyActivityScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DiscoveryPreferenceScreen from '../screens/DiscoveryPreferenceScreen';
import NotificationScreen from '../screens/NotificationScreen'

// grab svg icons
import SvgCog from '../components/icons/Svg.Cog';
import SvgDiscover from '../components/icons/Svg.Discover';
import SvgMessages from '../components/icons/Svg.Messages';

// Discover Stack
const DiscoverStack = createStackNavigator({
  Discover: DiscoverScreen
});

const DiscoverTabBarIcon = ({ focused }) => <SvgDiscover active={focused} />;
DiscoverTabBarIcon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

DiscoverStack.navigationOptions = {
  tabBarLabel: 'Discover',
  tabBarIcon: DiscoverTabBarIcon
};

// Messages Stack
const MessagesStack = createStackNavigator({
    MessagesBase: MessagesBaseScreen,
    MessagesDetails: MessagesDetailsScreen
});

const MessagesTabBarIcon = ({ focused }) => <SvgMessages active={focused} />;
MessagesTabBarIcon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

MessagesStack.navigationOptions = {
  tabBarLabel: 'Messages',
  tabBarIcon: MessagesTabBarIcon
};

// MyAccount Stack
const MyAccountStack = createStackNavigator({
  MyAccount: MyAccountScreen,
  MyActivity: MyActivityScreen,
  SettingsScreen: SettingsScreen,
  ProfileScreen:ProfileScreen,
  DiscoveryPreferenceScreen:DiscoveryPreferenceScreen,
  NotificationScreen :NotificationScreen,
});

const MyAccountTabBarIcon = ({ focused }) => <SvgCog active={focused} />;
MyAccountTabBarIcon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

MyAccountStack.navigationOptions = {
  tabBarLabel: 'My Account',
  tabBarIcon: MyAccountTabBarIcon
};

const TabNavigator = createBottomTabNavigator({
    Discover: DiscoverStack,
    MessagesStack: MessagesStack,
    MyAccount: MyAccountStack,
});

export default createStackNavigator (
    {
        Tabs: TabNavigator,
    }
    ,{
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
)
