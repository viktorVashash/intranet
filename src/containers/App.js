import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import * as globalActions from '/actions/globalActions'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'

function mapStateToProps (state) {
  return {
    users: state.global.users
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ ...globalActions }, dispatch)
  }
}

class App extends Component {
  componentWillMount () {
    this.getUsers()
    this.props.actions.getUsers()
  }

  async getUsers() {
    await this.props.actions.getUsers()
    Actions.Tabbar({ type: ActionConst.RESET })
  }

  render () {
    return (
      <View />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
