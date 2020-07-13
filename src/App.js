import React, { Component } from 'react';
import logo from './logo.svg';
import {View, Panel, PanelHeader, Header, Group, Cell, Button, Div, FormLayout, Slider, platform, Root} from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = App.getInitState();
  }

  static getInitState() {
    return {
      bpm: 0,
      playing: false,
      count: 0,
      activePanel: 'homePanel'
    };
  }

  render() {
    const osname = platform();

  return (
    //<Root activeView="homeView">
      <View activePanel="homeView" activePanel={this.state.activePanel}>
        <Panel id="homePanel">
          <PanelHeader>Metron</PanelHeader>
          <Div className='Button-wrapper'>
            <Button className='Main-button' mode='outline' onClick={this.props.handleClick}>
              {this.props.currentState ? "On" : "Off"}
            </Button>
          </Div>
          <Group header={<Header mode="secondary">Настройки</Header>}>
            <FormLayout>
              <Slider min={0} max={100} />
            </FormLayout>
          </Group>
        </Panel>
      </View>
    //</Root>
    );
  }

  openMain() {
    this.setState({activePanel:'homePanel'});
  }

}

export default App;
