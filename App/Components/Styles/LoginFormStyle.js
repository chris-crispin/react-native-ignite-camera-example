import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 25
  },
  input: {
    marginTop: 20,
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    fontSize: 25,
    color: Colors.secondaryText,
    padding: 5
  },
  button: {
    marginTop: 20,
    alignSelf: 'stretch',
    backgroundColor: Colors.primaryLight,
    borderRadius: 15,
    padding: 10,
    height: 50
  },
  buttonText: {
    color: Colors.primaryText,
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
})
