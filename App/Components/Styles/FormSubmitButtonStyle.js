import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1
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
