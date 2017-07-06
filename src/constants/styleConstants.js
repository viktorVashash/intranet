import { Dimensions, Platform } from 'react-native'

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

export default {
  fontFamily: {
    openSans: 'OpenSans',
    openSansLight: 'OpenSans-Light',
    openSansBold: 'OpenSans-Bold',
    openSansItalic: 'OpenSans-Italic'
  },
  screenWidth,
  screenHeight: (Platform.OS === 'ios') ? screenHeight : screenHeight + 50,
  screenHeightWithHeaderAndFooter: (Platform.OS === 'ios') ? screenHeight - 102 : screenHeight - 79,
  screenHeightWithHeaderAndFooterAndScroll: (Platform.OS === 'ios') ? screenHeight - 102 : screenHeight - 130,
  colors: {
    white: '#ffffff',
    black: '#000000',
    blue: '#4d74e8',
    darkGrey: '#575956',
    mediumGrey: '#979B9C',
    lightGrey: '#EFEFEF',
    buttonGrey: '#45515B',
    buttonGreyClicked: '#3a444c'
  }
}
