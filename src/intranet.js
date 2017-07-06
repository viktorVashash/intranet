import React, { Component } from 'react'
import {
  AppRegistry,
  Text,
  TouchableHighlight,
  View
  } from 'react-native'
import {
  Router,
  Scene,
  Actions,
  Reducer,
  ActionConst
} from 'react-native-router-flux'
import { Provider } from 'react-redux'
import configureStore from './lib/configureStore'
import Translations from './lib/Translations'
import I18n from 'react-native-i18n'
import Icon from 'react-native-vector-icons/FontAwesome'
import Button from 'apsl-react-native-button'
import App from './containers/App'
import Assignments from './containers/Assignments'
import Projects from './containers/Projects'
import SideDrawer from './components/Helpers/Menu/SideDrawer'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import styles from './styles'

require('gsap')
require('gsap-react-plugin')

I18n.fallbacks = true
I18n.translations = Translations

class BackButton extends React.PureComponent {
  render () {
    return (
      <TouchableHighlight
        style={styles.button}
        onPress={this.props.back}
        underlayColor={'transparent'}>
        <View style={styles.backButtonContainer}>
          <Icon name={'back'} size={20} style={{ color: 'white' }} />
          <Text style={styles.buttonText}>
            {this.props.backTitle}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const iconName = (title) => {
  switch (title) {
    case 'Assignments':
      return 'bar-chart'
    case 'Projects':
      return 'calendar-check-o'
    default:
      return 'bar-chart'
  }
}

const TabIcon = ({ selected, title }) => {
  const icon = iconName(title)

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Icon name={icon} size={25} color='white' />
      {selected && <Text style={{color: 'white'}}>{title}</Text>}
    </View>
  );
}

class HomeTitle extends React.PureComponent {
  render () {
    return (
      <View style={{ alignItems: 'center' }}>
        <Icon name={'logo-with-text'} size={28} style={{ color: 'white', marginTop: 25 }} />
      </View>
    )
  }
}

const reducerCreate = (params) => {
  const defaultReducer = new Reducer(params)
  return (state, action) => defaultReducer(state, action)
}

export default function native () {
  class Intranet extends Component {
    menuButton () {
      return (
        <Button onPress={() => Actions.refresh({ key: 'Tabbar', open: true })} style={styles.leftButton}>
          <Icon style={styles.menuIcon} name={'bars'} size={25} />
        </Button>
      )
    }

    filterButton () {
      return (
        <Button onPress={() => {}} style={styles.rightButton}>
          <Icon style={styles.menuIcon} name={'filter'} size={25} />
        </Button>
      )
    }

    render () {
      return (
        <Provider store={configureStore}>
          <Router sceneStyle={styles.mainSceneStyle} createReducer={reducerCreate}>
            <Scene key={'root'} initial>
              <Scene
                key={'App'}
                component={App}
                type={'replace'}
                initial />

              <Scene key='Tabbar'
                open={false}
                component={SideDrawer}>

                <Scene
                  key='tabbar'
                  tabs={true}
                  tabBarStyle={{ backgroundColor: '#4d74e8' }}>

                  <Scene
                    renderRightButton={this.filterButton}
                    renderBackButton={this.menuButton}
                    navigationBarStyle={styles.navBarStyle}
                    titleStyle={styles.navBarTitle}
                    key="Assignments"
                    title={I18n.t('Scenes.assignments')}
                    component={Assignments}
                    icon={TabIcon} />
                  <Scene
                    renderRightButton={this.filterButton}
                    renderBackButton={this.menuButton}
                    navigationBarStyle={styles.navBarStyle}
                    titleStyle={styles.navBarTitle}
                    key="Projects"
                    title={I18n.t('Scenes.projects')}
                    component={Projects}
                    icon={TabIcon} />

                </Scene>
              </Scene>


            </Scene>
          </Router>
        </Provider>
      )
    }
  }

  AppRegistry.registerComponent('intranet', () => Intranet)
}
