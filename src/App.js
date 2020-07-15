import React, { Component } from 'react';
import {View, Panel, PanelHeader, Header, Group, Div, FormLayout, Button, Slider, Text} from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css';
import './App.css';
import click1 from '../src/samples/click1.wav'
import click2 from '../src/samples/click2.wav'

// class App extends Component {

//   constructor(props) {
//     super(props);
    
//     this.click1 = new Audio(click1);
//     this.click2 = new Audio(click2);
//     // this.handleBPM = this.handleBPM.bind(this);
//     // this.updateInterval = this.updateInterval.bind(this);
//     // this.startStop = this.startStop.bind(this);
//     // this.playClick = this.playClick.bind(this);
//     this.state = App.getInitState();
//   }

//   static getInitState() {
//     return {
//       bpm: 100,
//       playing: false,
//       count: 0,
//       activePanel: 'homePanel',
//       beatsPerMeasure: 4
//     };
//   }

//   // updateInterval() {
//   //   const bmpSpeed = 60 * 1000 / this.state.bpm;
//   //   this.timer = setInterval(this.playClick, bmpSpeed);
//   // }

//   // handleBPM(event) {
//   //   const bpm = event.target.value;
//   //   if (this.state.playing) {
//   //       clearInterval(this.timer);
//   //       this.updateInterval();
//   //       this.setState({
//   //           count: 0,
//   //           bpm
//   //       });
//   //   } else {
//   //       this.setState({
//   //           bpm
//   //       });
//   //   };
//   // }

//   handleBpmChange = event =>{
//     const bpm = event.target.value;
//     if(this.state.playing){
//       clearInterval(this.timer);
//       this.timer = setInterval(this.playClick, (60/ bpm) *1000);
//       this.setState({
//         count:0,
//         bpm
//       });
//     }else{
//       this.setState({bpm});
//     }
//   }

// // playClick() {
// //     if (this.state.count === 0) this.click2.play();
// //     else this.click1.play();
// //     this.setState({
// //         count: this.state.count + 1
// //     });
// //   }

// playClick = () =>{
//   const{count, beatsPerMeasure} = this.state;

//   if(count% beatsPerMeasure === 0){
//     this.click2.play();
//   }else{
//     this.click1.play();
//   }
//   this.setState(state => ({
//     count: (state.count + 1) % state.beatsPerMeasure
//   }));
// };

//   // startStop() {
//   //   if (this.state.playing) {
//   //       clearInterval(this.timer);
//   //       this.setState({
//   //           playing: false
//   //       });
//   //   } else {
//   //       this.updateInterval();
//   //       this.setState({
//   //           count: 0,
//   //           playing: true
//   //       }, this.playClick)
//   //   }
//   // }

//   startStop = () => {
//     if(this.state.playing){
//       clearInterval(this.timer);
//       this.setState({
//         playing:false
//       });
//     }else{
//       this.timer = setInterval(
//         this.playClick,
//         (60/this.state.bpm)*1000
//       );
//       this.setState({
//         count:0,
//         playing:true,
//       },
//       this.playClick
//       );
//     }
//   };

//   render() {
//     const osname = platform();
//     const {playing, bpm} = this.state

//   return (
//     //<Root activeView="homeView">
//       <View activePanel="homeView" activePanel={this.state.activePanel}>
//         <Panel id="homePanel">
//           <PanelHeader>Metron</PanelHeader>
//           <Div className='Main-wrapper'>
//             {/* <Button handleClick={this.startStop} currentState={this.state.playing}/> */}
//             <Button mode='outline' className='Main-button' onClick={this.startStop}>
//               {
//                 this.playing ? 'Stop' : 'Start'
//               }
//             </Button>
//           </Div>

//           <Group header={<Header mode="secondary">Настройки</Header>}>
//             <FormLayout>
//               {/* <Slider bpm={this.state.bpm} handleChange={this.handleBPM}/> */}
//               <Slider min={60} max={240} value={bpm} onChange={this.handleBpmChange}></Slider>
//             </FormLayout>
//           </Group>
//         </Panel>
//       </View>
//     //</Root>
//     );
//   }

//   openMain() {
//     this.setState({activePanel:'homePanel'});
//   }

// }

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

class App extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      // название на кнопке
      label: 'on',
      // бпм
      tempoBpm: 100,

      timer: null,
      counter: 0
    };

    // добавление аудио
    this.click1 = new Audio(click1);

    // обработчик кнопки
    this.toggleMainBtn = this.toggleMainBtn.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.tick = this.tick.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
  }

  startTimer() {
    let timer = setInterval(this.tick, (60/this.state.tempoBpm*1000));
    this.setState({timer});
  }

  stopTimer() {
    clearInterval(this.state.timer);
  }

  tick() {
    this.click1.play()
  }

  // метод обработки нажатия на кнопку
  toggleMainBtn() {
    let label = this.state.label === 'off' ? /*tempoBpm*/ 'on' : 'off';

    if(this.state.label === 'on') {
      this.click1.play()

      this.startTimer()
    }
    else {
      this.stopTimer()
    }
    this.setState({label: label});
  }

  changeBpm() {

  }

  // рендеринг страницы
  render() {
    return(
      <View activePanel='Main'>
        <Panel id='Main'>
          <PanelHeader>Metron</PanelHeader>
          <Div className='Main-wrapper'>
            <Button mode='outline' className='Main-button' onClick={this.toggleMainBtn}>
              {this.state.label}
            </Button>
          <Text weight='regular' style={{textAlign:'center'}}>Test</Text>
          </Div>
          <Group header={<Header mode='secondary'>Настройки</Header>}>
              <FormLayout>
                <Text weight='regular' style={{textAlign:'center'}}>
                  {this.state.tempoBpm} bpm
                </Text>
                <Slider min={60} max={240} step={1} /*top={this.state.tempoBpm }*/ value={Number(this.state.tempoBpm)} onChange={tempoBpm => this.setState({tempoBpm})}></Slider>
              </FormLayout>
            </Group>
        </Panel>
      </View>
    );
  }
}

export default App;
