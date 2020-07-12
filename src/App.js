import React, { Component } from 'react';
import logo from './logo.svg';
import {View, Panel, PanelHeader, Header, Group, Cell, Button, Div, FormLayout, Slider, platform, Root} from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css';
import './App.css';

// function App() {
//   return (
//     <View activePanel="main">
//     <Panel id="main">
//       <PanelHeader>Metron</PanelHeader>
//       <Div className='Button-wrapper'>
//         <Button className='Main-button' mode='outline' size='l'>
//           off
//         </Button>
//       </Div>
//       <Group header={<Header mode="secondary">Настройки</Header>}>
//         <FormLayout>
//           <Slider min={0} max={100} />
//         </FormLayout>
//       </Group>
//     </Panel>
//   </View>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = App.getInitState();
  }

  static getInitState() {
    return {
      activePanel: 'homePanel'
    };
  }

  render() {
    const osname = platform();

    return (
      <Root activeView="homeView">
        <View activePanel="homeView" activePanel={this.state.activePanel}>
          <Panel id="homePanel">
            <PanelHeader>Metron</PanelHeader>
            <Div className='Button-wrapper'>
              <Button className='Main-button' mode='outline' size='l'>
                off
              </Button>
            </Div>
            <Group header={<Header mode="secondary">Настройки</Header>}>
              <FormLayout>
                <Slider min={0} max={100} />
              </FormLayout>
            </Group>
          </Panel>
        </View>
    </Root>
    );
  }

  openMain() {
    this.setState({activePanel:'homePanel'});
  }

}

export default App;
