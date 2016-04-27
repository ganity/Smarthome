/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter,
  ToastAndroid,
  TouchableHighlight,
  Image,
  Platform,
  TextInput,
  ScrollView,
  BackAndroid
} from 'react-native';

var HomeMod = require('./HomeMod');
var LightModOpt = require('./LightModOpt');
var AirModChange = require('./AirModChange');
var RoomControl = require('./RoomControl');
class HOME extends Component {
  constructor(props){
    super(props);
    this.state = { 
      inroom:1
    }
  }
  componentDidMount() {
    var comp = this;
    BackAndroid.addEventListener('hardwareBackPress', function() {
      comp.setState({
        inroom:1
      });
      return true;
        
    });
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress');
  }
  handleChange() {
    this.setState({
      inroom:0
    });
  }
  render() {
    if (this.state.inroom === 0) {
      return (
      <ScrollView style={styles.container}>
        <LightModOpt/>
        <RoomControl />
      </ScrollView>
      );
    } else {
    return (
      <ScrollView style={styles.container}>
         <AirModChange/>
         
        <View>
          <TouchableHighlight onPress={this.handleChange.bind(this, 0)} underlayColor="transparent">
          <View>
              <LightModOpt/>
              </View>
          </TouchableHighlight>
              
              <LightModOpt/>
            
          
             
              <LightModOpt/>
            
        </View>
      </ScrollView>
    );
    }
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
         //flexDirection: 'row',   // 水平排布
        // paddingLeft: 10,
        // paddingRight: 10,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏
        height: Platform.OS === 'ios' ? 68 : 168,   // 处理iOS状态栏
        backgroundColor: '#86A3FF',
        //alignItems: 'flex-start'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中 center
    },
    
  
});

module.exports = HOME;
