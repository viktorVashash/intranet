import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View, StatusBar } from 'react-native'
import AssignmentsView from '/components/AssignmentsView'
import * as globalActions from '/actions/globalActions'

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ ...globalActions }, dispatch)
  }
}

function mapStateToProps (state) {
  return {
    users: state.global.users,
    page: state.global.page
  }
}

class Assignments extends Component {
  render () {
    console.log(this.props.users);
    return (
      <View style={{ flex: 1, marginTop: 65 }}>
        <StatusBar barStyle="light-content" />
        <AssignmentsView
          moveToIndex={this.props.actions.moveToIndex}
          users={this.props.users}
          page={this.props.page}
        />
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Assignments)
