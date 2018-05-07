import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/FormSubmitButtonStyle'

export default class FormSubmitButton extends Component {
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

  render () {
    return (
      <TouchableOpacity
        onPress={this.props.handleSubmit}
        style={styles.button}>
        <Text
          style={styles.buttonText}>
          Login
        </Text>
      </TouchableOpacity>
    )
  }
}
