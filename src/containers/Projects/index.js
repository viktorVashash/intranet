import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import ProjectsView from '/components/ProjectsView'

class Projects extends Component {
  render () {
    return (
      <View style={{ flex: 1, marginTop: 65 }}>
        <StatusBar barStyle="light-content" />
        <ProjectsView />
      </View>
    )
  }
}

export default Projects
