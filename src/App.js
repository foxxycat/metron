import React, { Component } from 'react';
import logo from './logo.svg';
import {View, Panel, PanelHeader, Header, Group, Div, FormLayout, platform} from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.click1 = new Audio("https://daveceddia.com/freebies/react-metronome/click1.wav");
    this.click2 = new Audio("https://daveceddia.com/freebies/react-metronome/click1.wav");
    this.handleBPM = this.handleBPM.bind(this);
    this.updateInterval = this.updateInterval.bind(this);
    this.startStop = this.startStop.bind(this);
    this.playClick = this.playClick.bind(this);
    this.state = App.getInitState();
  }

  static getInitState() {
    return {
      bpm: 100,
      playing: false,
      count: 0,
      activePanel: 'homePanel',
    };
  }

  updateInterval() {
    const bmpSpeed = 60 * 1000 / this.state.bpm;
    this.timer = setInterval(this.playClick, bmpSpeed);
  }

  handleBPM(event) {
    const bpm = event.target.value;
    if (this.state.playing) {
        clearInterval(this.timer);
        this.updateInterval();
        this.setState({
            count: 0,
            bpm
        });
    } else {
        this.setState({
            bpm
        });
    };
  }

playClick() {
    if (this.state.count === 0) this.click2.play();
    else this.click1.play();
    this.setState({
        count: this.state.count + 1
    });
  }

  startStop() {
    if (this.state.playing) {
        clearInterval(this.timer);
        this.setState({
            playing: false
        });
    } else {
        this.updateInterval();
        this.setState({
            count: 0,
            playing: true
        }, this.playClick)
    }
  }

  render() {
    const osname = platform();

  return (
    //<Root activeView="homeView">
      <View activePanel="homeView" activePanel={this.state.activePanel}>
        <Panel id="homePanel">
          <PanelHeader>Metron</PanelHeader>
          <Div className='Main-wrapper'>
            <Button handleClick={this.startStop} currentState={this.state.playing}/>

          <Group header={<Header mode="secondary">Настройки</Header>}>
            <FormLayout>
              <Slider bpm={this.state.bpm} handleChange={this.handleBPM}/>
            </FormLayout>
          </Group>
          </Div>
        </Panel>
      </View>
    //</Root>
    );
  }

  openMain() {
    this.setState({activePanel:'homePanel'});
  }

}

class Button extends React.Component {
  render() {
    return(
      <button onClick={this.props.handleClick} className="Main-button">
        {
          this.props.currentState ? "Stop" : "Start"
        }
      </button>
    );
  }
}

class Slider extends React.Component {
  render() {
    return(
      <div id="bpm-slider">
        <div>
          {
            this.props.bpm
          }
          BPM
        </div>
        <input type="range" min="60" max="240" value={this.props.bpm} onChange={this.props.handleChange}></input>
      </div>
    );
  }
}

export default App;
