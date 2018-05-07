import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native'
import styles from './Styles/UserInputStyle'

export default class UserInput extends Component {

  render () {
    return (
      <TextInput
        style={styles.input}
        placeholder='username or email'
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='email-address'
      />
    )
  }
}
