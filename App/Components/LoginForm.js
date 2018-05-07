import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './Styles/LoginFormStyle'
import App from '../Containers/App';
import UserInput from './UserInput'
import PasswordInput from './PasswordInput'
import FormSubmitButton from './FormSubmitButton'

export default class LoginForm extends Component {
  // // Prop type warnings
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }
  handleSubmit() {
    //if auth
    this.props.navigation.navigate('ConfirmPasswordScreen')
  }

  render () {
    return (
      <View style={styles.container}>
        <UserInput />
        <PasswordInput handleSubmit={() => this.handleSubmit()}/>
        <FormSubmitButton handleSubmit={() => this.handleSubmit()}/>
      </View>
    )
  }
}
