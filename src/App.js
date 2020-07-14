import React, { Component } from 'react';
import logo from './logo.svg';
import {View, Panel, PanelHeader, Header, Group, Div, FormLayout, platform, Button, Slider} from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css';
import './App.css';
import click1 from '../src/samples/click1.wav'
import click2 from '../src/samples/click2.wav'

class App extends Component {

  constructor(props) {
    super(props);
    
    this.click1 = new Audio(click1);
    this.click2 = new Audio(click2);
    // this.handleBPM = this.handleBPM.bind(this);
    // this.updateInterval = this.updateInterval.bind(this);
    // this.startStop = this.startStop.bind(this);
    // this.playClick = this.playClick.bind(this);
    this.state = App.getInitState();
  }

  static getInitState() {
    return {
      bpm: 100,
      playing: false,
      count: 0,
      activePanel: 'homePanel',
      beatsPerMeasure: 4
    };
  }

  // updateInterval() {
  //   const bmpSpeed = 60 * 1000 / this.state.bpm;
  //   this.timer = setInterval(this.playClick, bmpSpeed);
  // }

  // handleBPM(event) {
  //   const bpm = event.target.value;
  //   if (this.state.playing) {
  //       clearInterval(this.timer);
  //       this.updateInterval();
  //       this.setState({
  //           count: 0,
  //           bpm
  //       });
  //   } else {
  //       this.setState({
  //           bpm
  //       });
  //   };
  // }

  handleBpmChange = event =>{
    const bpm = event.target.value;
    if(this.state.playing){
      clearInterval(this.timer);
      this.timer = setInterval(this.playClick, (60/ bpm) *1000);
      this.setState({
        count:0,
        bpm
      });
    }else{
      this.setState({bpm});
    }
  }

// playClick() {
//     if (this.state.count === 0) this.click2.play();
//     else this.click1.play();
//     this.setState({
//         count: this.state.count + 1
//     });
//   }

playClick = () =>{
  const{count, beatsPerMeasure} = this.state;

  if(count% beatsPerMeasure === 0){
    this.click2.play();
  }else{
    this.click1.play();
  }
  this.setState(state => ({
    count: (state.count + 1) % state.beatsPerMeasure
  }));
};

  // startStop() {
  //   if (this.state.playing) {
  //       clearInterval(this.timer);
  //       this.setState({
  //           playing: false
  //       });
  //   } else {
  //       this.updateInterval();
  //       this.setState({
  //           count: 0,
  //           playing: true
  //       }, this.playClick)
  //   }
  // }

  startStop = () => {
    if(this.state.playing){
      clearInterval(this.timer);
      this.setState({
        playing:false
      });
    }else{
      this.timer = setInterval(
        this.playClick,
        (60/this.state.bpm)*1000
      );
      this.setState({
        count:0,
        playing:true,
      },
      this.playClick
      );
    }
  };

  render() {
    const osname = platform();
    const {playing, bpm} = this.state

  return (
    //<Root activeView="homeView">
      <View activePanel="homeView" activePanel={this.state.activePanel}>
        <Panel id="homePanel">
          <PanelHeader>Metron</PanelHeader>
          <Div className='Main-wrapper'>
            {/* <Button handleClick={this.startStop} currentState={this.state.playing}/> */}
            <Button mode='outline' className='Main-button' onClick={this.startStop}>
              {
                this.playing ? 'Stop' : 'Start'
              }
            </Button>
          </Div>

          <Group header={<Header mode="secondary">Настройки</Header>}>
            <FormLayout>
              {/* <Slider bpm={this.state.bpm} handleChange={this.handleBPM}/> */}
              <Slider min={60} max={240} value={bpm} onChange={this.handleBpmChange}></Slider>
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

// class Button extends React.Component {
//   render() {
//     return(
//       <button onClick={this.props.handleClick} className="Main-button">
//         {
//           this.props.currentState ? "Stop" : "Start"
//         }
//       </button>
//     );
//   }
// }

// class Slider extends React.Component {
//   render() {
//     return(
//       <div id="bpm-slider">
//         <div>
//           {
//             this.props.bpm
//           }
//           BPM
//         </div>
//         <input type="range" min="60" max="240" value={this.props.bpm} onChange={this.props.handleChange}></input>
//       </div>
//     );
//   }
// }

export default App;
