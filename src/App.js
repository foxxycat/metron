import React from 'react';
import logo from './logo.svg';
import {View, Panel, PanelHeader, Header, Group, Cell, Button} from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css';
import './App.css';

function App() {
  return (
    <View activePanel="main">
    <Panel id="main">
      <PanelHeader>Metron</PanelHeader>
      <Group>
        <Button className='Main-button' mode='outline' size='l'>
          off
        </Button>
      </Group>
      <Group header={<Header mode="secondary">Настройкм</Header>}>
      </Group>
    </Panel>
  </View>
  );
}

export default App;
