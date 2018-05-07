import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1
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
  }
})
