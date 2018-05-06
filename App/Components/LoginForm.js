import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './Styles/LoginFormStyle'
import App from '../Containers/App';

export default class LoginForm extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }
  handleSubmit() {
    alert('LOGIN')
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='username or email'
          returnKeyType='next'
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='email-address'
        />
        <TextInput
          secureTextEntry style={styles.input}
          placeholder='password'
          returnKeyType='go'
          ref={(input) => this.passwordInput = input}
          onSubmitEditing={this.handleSubmit}
        />
        <TouchableOpacity
          onPress={this.handleSubmit}
          style={styles.button}>
          <Text
            style={styles.buttonText}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
