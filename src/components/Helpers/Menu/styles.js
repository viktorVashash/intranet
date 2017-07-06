import { StyleSheet, Dimensions } from 'react-native'

const x = Dimensions.get('window').width
const menuWidth = x * 0.4

module.exports = StyleSheet.create({
  sideMenu: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: menuWidth,
    backgroundColor: 'green',
    flexDirection: 'column',
    alignItems: 'center'
  },
  closeIcon: {
    position: 'absolute',
    top: 15,
    right: 5
  },
  icon: {
    color: 'white'
  },
  welcomeWrapper: {
    marginTop: 40,
    alignItems: 'center'
  },
  header: {
    color: 'white',
    fontSize: 16,
    fontWeight: '800'
  },
  profileIcon: {
    color: 'white',
    marginTop: 15
  },
  profileName: {
    color: 'white',
    fontSize: 16,
    marginTop: 5
  },
  buttonWrapper: {
    position: 'relative',
    flexDirection: 'column'
  },
  buttonHelper: {
    height: 41,
    marginTop: 21
  },
  button: {
    flexDirection: 'row',
    marginBottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 0,
    borderRadius: 0,
    backgroundColor: 'rgba(239, 239, 239, 0.1)',
    height: 30,
    position: 'relative',
    zIndex: 1,
    width: menuWidth
  },
  buttonIcon: {
    color: 'white',
    padding: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5
  },
  iconBadge: {
    position: 'absolute',
    top: -10,
    right: 3,
    width: 23,
    height: 23,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  }
})
