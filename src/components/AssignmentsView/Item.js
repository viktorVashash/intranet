import React, { Component } from 'react'
import {
  View,
  Text,
  ListView
} from 'react-native'
import SortableListView from 'react-native-sortable-listview'
import Icon from 'react-native-vector-icons/FontAwesome'
import User from './User'
import styles from './styles'

export default class Item extends Component {
  constructor (props) {
    super(props)

    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => (r1 !== r2) })

    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.users)
    }
  }

  componentWillMount () {
    this.setState({
      dataSource: this.ds.cloneWithRows(this.props.users),
      top: 0,
      left: 20
    })
  }

  getTween (property, finalValue,  duration, options) {
    if (!options) {
      options = {};
    }
    var finalState = {};
    finalState[property] = finalValue;
    return TweenMax.to(this, duration, Object.assign({}, { state: finalState }, options));
  }

  renderRow (rowData) {
    return (
      <User user={rowData} />
    )
  }

  render () {
    const animatableStyles = {
      top: this.state.top,
      left: this.state.left
    }
    const order = Object.keys(this.props.users)

    return (
      <View style={[styles.container, {position: 'relative', zIndex: 2}, animatableStyles]}>
        <View style={styles.headerWrapper}>
          <Text>Shaddow assigned</Text>
          <Icon name='plus' size={25} color='#4d74e8' />
        </View>
        {this.state.dataSource ?

          <SortableListView
            data={this.props.users}
            order={order}
            onMoveStart={ () => this.props.setBlockMove() }
            onMoveEnd={ () => this.props.setBlockMove() }
            onRowMoved={e => {
              console.log('moved');
              order.splice(e.to, 0, order.splice(e.from, 1)[0]);
              this.forceUpdate();
            }}
            renderRow={(rowData) => <User onScroll={this.props.onScroll} setBlockMove={this.props.setBlockMove} user={rowData} />}
          />
          :
          <Text>Loading...</Text>
        }
      </View>
    )
  }
}
