import React, {Component} from  'react';
import {View, Text} from 'react-native';
import Header from './components/Header.js'
import AlbumList from './components/AlbumLists'
import Card from './components/Card'

class App extends Component {
  render() {
    return (
      <View>
        <Header title="Albums"/>
        <AlbumList/>
      </View>
    );
  }
};
 
export default App;
