import { StackNavigator } from 'react-navigation'
import LoginScreen from '../Containers/LoginScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Login'
    }
  },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    headerStyle: styles.header,
    headerTitleStyle: styles.title
  }
})

export default PrimaryNav
