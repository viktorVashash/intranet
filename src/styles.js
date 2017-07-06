import { StyleSheet, Platform } from 'react-native'

module.exports = StyleSheet.create({
  mainSceneStyle: {
    flex: 1,
    backgroundColor: 'white'
  },
  navBarStyle: {
    flex: 1,
    height: 55,
    backgroundColor: '#4d74e8'
  },
  navBarBackButton: {
    color: '#fff',
    fontSize: 14,
    width: 180
  },
  navBarTitle: {
    color: '#fff',
    fontSize: 14,
    width: 180
  },
  homeNavBarTitle: {
    color: 'white',
    fontSize: 22,
    letterSpacing: 0,
    marginTop: (Platform.OS === 'ios') ? 0 : 7
  },
  leftButton: {
    paddingBottom: 0,
    height: 24,
    width: 180,
    borderWidth: 0,
    borderRadius: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 0
  },
  rightButton: {
    paddingBottom: 0,
    height: 24,
    width: 180,
    borderWidth: 0,
    borderRadius: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 0
  },
  backButtonContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },
  buttonText: {
    color: 'white',
    fontSize: 10,
    marginLeft: -2
  },
  menuIcon: {
    color: 'white'
  },
  iconBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 16,
    width: 23,
    height: 23,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  badgeNumber: {
    color: '#fff'
  },
  titleWrapper: {
    marginTop: 0
  }
})
