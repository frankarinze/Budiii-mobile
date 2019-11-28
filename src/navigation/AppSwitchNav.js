import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import TabsNav from './TabsNav';
import LoginScreen from '../screens/auth/LoginScreen';
import RecoveryScreen from '../screens/auth/RecoveryScreen';
import VerifyScreen from '../screens/auth/VerifyScreen';
import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen';
import AuthLoadingScreen from '../screens/auth/AuthLoadingScreen';
import RegistrationScreen from "../screens/auth/RegistrationScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import NotificationScreen from "../screens/NotificationScreen";

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: MyAccountScreen,
  Recovery: RecoveryScreen,
  Verify: VerifyScreen,
  ResetPasswordScreen:ResetPasswordScreen,
  
});

const SwitchNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Main: TabsNav,
  Auth: AuthStack,
});

const App = createAppContainer(SwitchNavigator);

export default App;
