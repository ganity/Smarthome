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
  TouchableHighlight
} from 'react-native';

//var DemoSn = require('./DemoSn');
var Main = require('./Main');
// Must be in global to register the listener, otherwise it may be too late in this case.
// You may save the info to DB and subscribe DB event in component.
DeviceEventEmitter.addListener('FromService', (data)=>{
  console.log("got message from service " + data.something);
  ToastAndroid.show(data.something, ToastAndroid.SHORT);
});

class Smarthome extends Component {

  
  render() {
    return (
      <Main/>
    );
  }
}

AppRegistry.registerComponent('Smarthome', () => Smarthome);
