import { StyleSheet, Dimensions } from 'react-native'
import StyleConsts from '/constants/styleConstants'
const { width, height } = Dimensions.get('window')

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    width: width - 40,
    height,
    marginHorizontal: 10,
  //  paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'grey',
    borderTopWidth: 10,
    borderTopColor: 'green',
    borderRadius: 5
  },
  headerWrapper: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    padding: 5,
    borderTopWidth: 1,
    borderColor: 'grey'
  },
  userInfoView: {
    position: 'relative',
    zIndex: 3,
  }
})
