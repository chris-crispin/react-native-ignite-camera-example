import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native'
import styles from './Styles/PasswordInputStyle'
import { NONE } from 'apisauce';

export default class PasswordInput extends Component {
  // // Prop type warnings
  static propTypes = {
    // handleSubmit: PropTypes.function
  }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <TextInput
        secureTextEntry style={styles.input}
        placeholder='password'
        returnKeyType='go'
        onSubmitEditing={this.props.handleSubmit ? this.props.handleSubmit : None}
      />
    )
  }
}
