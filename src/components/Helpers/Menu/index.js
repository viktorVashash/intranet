import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux'
import styles from './styles'

const contextTypes = {
  drawer: PropTypes.object
}

const propTypes = {
  name: PropTypes.string,
  sceneStyle: View.propTypes.style,
  title: PropTypes.string
}

class Modal extends Component {

  render () {
    const drawer = this.context.drawer
    return (
      <View style={styles.sideMenu}>
        <TouchableOpacity style={styles.closeIcon} onPress={() => { drawer.close() }}>
          <Text style={styles.icon}>Close</Text>
        </TouchableOpacity>
        <View style={styles.welcomeWrapper}>
          <Text style={styles.header}>Menu.</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <View style={styles.buttonHelper}>
            <TouchableOpacity
              onPress={() => { drawer.close() }}
              style={styles.button}>
              <Text style={styles.buttonText}>Button</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

Modal.contextTypes = contextTypes
Modal.propTypes = propTypes

export default Modal
