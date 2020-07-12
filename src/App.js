import React from 'react';
import logo from './logo.svg';
import {View, Panel, PanelHeader, Header, Group, Cell} from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css';
import './App.css';

function App() {
  return (
    <View activePanel="main">
    <Panel id="main">
      <PanelHeader>VKUI</PanelHeader>
      <Group header={<Header mode="secondary">Items</Header>}>
        <Cell>Hello</Cell>
        <Cell>World</Cell>
      </Group>
    </Panel>
  </View>
  );
}

export default App;
