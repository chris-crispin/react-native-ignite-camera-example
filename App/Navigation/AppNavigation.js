import { StackNavigator } from 'react-navigation'
import CameraScreen from '../Containers/CameraScreen'
import ConfirmPasswordScreen from '../Containers/ConfirmPasswordScreen'
import LoginScreen from '../Containers/LoginScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import { Colors } from '../Themes/'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  CameraScreen: { screen: CameraScreen },
  ConfirmPasswordScreen: { screen: ConfirmPasswordScreen, 
    navigationOptions: {
      title: 'Confirm New Password'
    }
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Login'
    }
  },
  LaunchScreen: { screen: LaunchScreen,
    navigationOptions: {
      header: null
    }
  }
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    headerLeft: null,
    headerStyle: styles.header,
    headerTitleStyle: styles.title,
    headerBackTitleStyle: styles.title,
    headerTintColor: Colors.primaryText
  }
})

export default PrimaryNav
