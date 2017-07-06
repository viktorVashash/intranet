import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableHighlight,
  PanResponder,
  Animated,
  Image,
  Dimensions
} from 'react-native'
import styles from './styles'

const { width } = Dimensions.get('window')

export default class User extends Component {
  constructor (props) {
    super(props)

    this.state = {
      pan: new Animated.ValueXY(),
    }
  }

  componentWillMount () {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: this.handleOnPanResponderMove.bind(this),
      onPanResponderGrant: this.handlePanResponderGrant.bind(this),
      // onPanResponderTerminate: this.handlePanResponderEnd.bind(this),
      // onPanResponderRelease: this.handleOnPanResponderRelease.bind(this)
    })
  }

  handleOnPanResponderMove (e, gesture) {
    console.log(gesture.dx, width);
    this.props.setBlockMove()
    if (gesture.dx > 200 || gesture.dx < 0) {
      this.props.onScroll(e, gesture.dx)
      Animated.spring(this.state.pan, {
        toValue: {
          x: gesture.dx,
          y: gesture.dy
        }
      }).start()
    } else {
      Animated.spring(this.state.pan, {
        toValue: {
          x: gesture.dx,
          y: gesture.dy
        }
      }).start()
    }
  }

  handlePanResponderGrant (e, gesture) {
    this.props.setBlockMove()
  }

  handleLongPress () {
    console.log('long press');
    this.props.setBlockMove()
  }

  render () {
    const { user } = this.props

    return (
      <TouchableHighlight
        {...this.props.sortHandlers}
        style={styles.button}>
        <Animated.View style={[this.state.pan.getLayout(), styles.userInfoView]}
          onLongPress={this.handleLongPress}
        //  {...this.panResponder.panHandlers}>
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={{width: 50, height: 50, borderRadius: 25}} source={{uri: user.avatar}} />
            <View style={{ marginLeft: 10 }}>
              <Text>{user.name}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text>{user.level}</Text>
                <Text>{user.english}</Text>
              </View>
            </View>
          </View>
          <Text>{user.experience[0]}</Text>
          <Text>{user.flag}</Text>
        </Animated.View>
      </TouchableHighlight>
    )
  }
}
