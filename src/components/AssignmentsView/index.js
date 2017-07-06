import React, { PureComponent } from 'react'
import { View, ScrollView, Dimensions } from 'react-native'
import Item from './Item'
import styles from './styles'

const { width, height } = Dimensions.get('window')

export default class AssignmentsView extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      count: [1, 2],
      enableScroll: true,
      activeSectionIndex: 1
    }

    this.blockScroll = this.blockScroll.bind(this)
    this.onScroll = this.onScroll.bind(this)
  }

  componentWillUpdate (props, state) {
    if (props.page !== this.props.page) {
      this.setActiveSection(props.page)
    }
  }

  setBlockMove(newActiveSectionIndex) {
    console.log('setBlockMove');
    const self = this;
    this.setState({
      enableScroll: false,
      activeSectionIndex: newActiveSectionIndex
    })
    setTimeout(() => {
      this.setState({
        enableScroll: true
      })
    }, 2000)
  }

  setActiveSection (newActiveSectionIndex) {
    const { activeSectionIndex } = this.state
    const timeline = new TimelineMax()

    setTimeout(() => {
      this.setBlockMove(newActiveSectionIndex)
    }, 1000)

    const direction = newActiveSectionIndex > activeSectionIndex ? 'left' : 'right'
    console.log(activeSectionIndex, newActiveSectionIndex);

    if (direction === 'left') {
      timeline.add(this.refs[`section_${activeSectionIndex}`]
        .getTween('left', '-340', 1, { ease: Bounce.easeOut }))
      timeline.add(this.refs[`section_${newActiveSectionIndex}`]
        .getTween('left', '-340', 1, { ease: Bounce.easeOut }))
    } else if (direction === 'right') {
      timeline.add(this.refs[`section_${activeSectionIndex}`]
        .getTween('left', '0', 1, { ease: Bounce.easeOut }))
      timeline.add(this.refs[`section_${newActiveSectionIndex}`]
        .getTween('left', '0', 1, { ease: Bounce.easeOut }))
    }


  }

  onScroll (event, gestureDx) {
    event.preventDefault()
    if (event.nativeEvent.contentOffset) {
      const { x } = event.nativeEvent.contentOffset
      const { enableScroll, count, activeSectionIndex } = this.state

      if (x > 0 && enableScroll && count.length > activeSectionIndex) {
        this.props.moveToIndex(activeSectionIndex + 1)
      } else if (x < 0 && enableScroll && 1 < activeSectionIndex) {
        this.props.moveToIndex(activeSectionIndex - 1)
      }
    } else {
      const { enableScroll, count, activeSectionIndex } = this.state
      if (gestureDx > 0 && count.length > activeSectionIndex) {
        this.props.moveToIndex(activeSectionIndex + 1)
      } else if (gestureDx < 0 && 1 < activeSectionIndex) {
        this.props.moveToIndex(activeSectionIndex - 1)
      }
    }
  }

  renderItem (index) {
    return (
      <Item
        key={index}
        enableScroll={this.state.enableScroll}
        ref={`section_${index}`}
        users={this.props.users}
        setBlockMove={this.blockScroll}
        onScroll={this.onScroll}
      />
    )
  }

  blockScroll () {
    this.setState({
      enableScroll: !this.state.enableScroll
    })
      console.log(this.state.enableScroll);
  }

  render () {
    return (
      <View style={{ backgroundColor: 'transparent', position: 'relative' }}>
        <ScrollView
          alwaysBounceHorizontal={this.state.enableScroll}
          alwaysBounceHorizontal={this.state.enableScroll}
          scrollEnabled={this.state.enableScroll}
          style={{ position: 'relative', zIndex: 1, width: width * 2, height, flexDirection: 'row' }}
          onScroll={this.onScroll.bind(this)}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          ref='scrollView'
          contentContainerStyle={{ backgroundColor: 'transparent' }}>
          {
            this.state.count.map((index) => this.renderItem(index))
          }
          </ScrollView>
        </View>
    )
  }
}
