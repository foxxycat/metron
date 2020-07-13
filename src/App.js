import React, { Component } from 'react';
import logo from './logo.svg';
import {View, Panel, PanelHeader, Header, Group, Cell, Button, Div, FormLayout, Slider, platform, Root} from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css';
import './App.css';

class App extends Component {

  render() {
    return(
      <View activePanel="main">
        <Panel id="main">
          <PanelHeader>Metron</PanelHeader>
          <Button>
            
          </Button>
        </Panel>
      </View>
    );
  }

  // constructor(props) {
  //   super(props);

  //   this.click1 = new Audio("https://daveceddia.com/freebies/react-metronome/click1.wav");
  //   this.click2 = new Audio("https://daveceddia.com/freebies/react-metronome/click1.wav");
    
  //   this.state = App.getInitState();
  // }

  // static getInitState() {
  //   return {
  //     bpm: 0,
  //     playing: false,
  //     count: 0,
  //     activePanel: 'homePanel',

      
  //   };
  // }

  // updateInterval() {
  //   const bpmSpeed = 60 * 1000 / this.state.bpm;
  //   this.timer = setInterval(this.playClick, bpmSpeed);
  // }

  // playClick() {
  //   if (this.state.count === 0) this.click2.play();
  //   else this.click1.play();
  //   this.setState({
  //     count: this.state.count + 1
  //   });
  // }

  // render() {
  //   const osname = platform();

  // return (
  //   //<Root activeView="homeView">
  //     <View activePanel="homeView" activePanel={this.state.activePanel}>
  //       <Panel id="homePanel">
  //         <PanelHeader>Metron</PanelHeader>
  //         <Div className='Button-wrapper'>
  //           <Button className='Main-button' mode='outline' handleClick={}>
  //             {this.props.currentState ? "On" : "Off"}
  //           </Button>
  //         </Div>
  //         <Group header={<Header mode="secondary">Настройки</Header>}>
  //           <FormLayout>
  //             <Slider min={0} max={100} />
  //           </FormLayout>
  //         </Group>
  //       </Panel>
  //     </View>
  //   //</Root>
  //   );
  // }

  // openMain() {
  //   this.setState({activePanel:'homePanel'});
  // }

}

export default App;
