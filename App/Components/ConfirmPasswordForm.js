import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/ConfirmPasswordFormStyle'
import PasswordInput from './PasswordInput'
import FormSubmitButton from './FormSubmitButton'

export default class ConfirmPasswordForm extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }
  handleSubmit() {
    this.props.navigation.navigate('LaunchScreen')
  }

  //need to add three password fields with different functionality
  render () {
   return (
      <View style={styles.container}>
        <PasswordInput handleSubmit={() => this.handleSubmit()}/>
        <FormSubmitButton handleSubmit={() => this.handleSubmit()} />
      </View>
    )
  }
}
