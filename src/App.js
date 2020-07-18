import React, { Component, useState, useEffect } from 'react';
import {View, Panel, PanelHeader, Header, Group, Div, FormLayout, Button, Slider, Text} from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css';
import './App.css';
import click1 from '../src/samples/click1.wav'
import click2 from '../src/samples/click2.wav'
import { render } from '@testing-library/react';

//class App extends React.Component{

  // V 0.01
  //
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     // название на кнопке
  //     label: 'on',
  //     // бпм
  //     tempoBpm: 100,

  //     timer: null,
  //     counter: 0
  //   };

  //   // добавление аудио
  //   this.click1 = new Audio(click1);

  //   // обработчик кнопки
  //   this.toggleMainBtn = this.toggleMainBtn.bind(this);
  //   this.startTimer = this.startTimer.bind(this);
  //   this.tick = this.tick.bind(this)
  //   this.stopTimer = this.stopTimer.bind(this)
  // }

  // startTimer() {
  //   let timer = setInterval(this.tick, (60/this.state.tempoBpm*1000));
  //   this.setState({timer});
  // }

  // stopTimer() {
  //   clearInterval(this.state.timer);
  // }

  // tick() {
  //   this.click1.play()
  // }

  // // метод обработки нажатия на кнопку
  // toggleMainBtn() {
  //   let label = this.state.label === 'off' ? /*tempoBpm*/ 'on' : 'off';

  //   if(this.state.label === 'on') {
  //     this.click1.play()

  //     this.startTimer()
  //   }
  //   else {
  //     this.stopTimer()
  //   }
  //   this.setState({label: label});
  // }

  // рендеринг страницы
  // render() {
  //   return(
      // V 0.01
      //
      // <View activePanel='Main'>
      //   <Panel id='Main'>
      //     <PanelHeader>Metron</PanelHeader>
      //     <Div className='Main-wrapper'>
      //       <Button mode='outline' className='Main-button' onClick={this.toggleMainBtn}>
      //         {this.state.label}
      //       </Button>
      //     </Div>
      //     <Group header={<Header mode='secondary'>Настройки</Header>}>
      //         <FormLayout>
      //           <Text weight='regular' style={{textAlign:'center'}}>
      //             {this.state.tempoBpm} bpm
      //           </Text>
      //           <Slider min={60} max={240} step={1} /*top={this.state.tempoBpm }*/ value={Number(this.state.tempoBpm)} onChange={tempoBpm => this.setState({tempoBpm})}></Slider>
      //         </FormLayout>
      //       </Group>
      //   </Panel>
      // </View>
//     );
//   }
// }


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: false,
      count: 0,
      tempo: 100
    }

    this.click1 = new Audio(click1);
    this.handleClick = this.handleClick.bind(this)
  }

  timerStart() {
    this.timerID = setInterval(() => this.tick(),(60/this.state.tempo*1000))
  }

  timerStop() {
    clearInterval(this.timerID)
  }

  tick() {
    this.click1.play();
    this.setState({count: this.state.count + 1})
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }), (this.state.isToggleOn ? this.timerStop : this.timerStart));
  }

  render() {
    return(
      <View activePanel='Main'>
        <Panel id='Main'>
          <PanelHeader>Metron</PanelHeader>
          <Div className='Main-wrapper'>
            <Button mode='outline' className='Main-button' onClick={()=>this.handleClick()}>
              {this.state.isToggleOn ? 'off': 'on'}
            </Button>
    <Text>{this.state.count}</Text>
          </Div>
          <Group header={<Header mode='secondary'>Настройки</Header>}>
              <FormLayout>
                <Text weight='regular' style={{textAlign:'center'}}>
                  {this.state.tempo} bpm
                </Text>
                <Slider min={60} max={240} step={1} /*top={this.state.tempoBpm }*/ value={Number(this.state.tempo)} onChange={tempo => this.setState({tempo})}></Slider>
              </FormLayout>
            </Group>
        </Panel>
      </View>
    );
  }  
}



export default App;