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

var IatAsyModule = require('./IatAsyModule');


class DemoSn extends Component {

  // componentDidMount() {
  //   IatAsyModule.start();
  // }
  handleClick(){
    IatAsyModule.start();
  }
  handleClickOut(){
    IatAsyModule.stop();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
        
        <TouchableHighlight style={styles.button}
 					onPressIn={this.handleClick.bind(this)}
          onPressOut={this.handleClickOut.bind(this)}
 					underlayColor="white">
 					<Text style={styles.buttonText}>收到"开始说话"提示后说话</Text>
 				</TouchableHighlight>
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonText:{
  	fontSize:18,
  	color:'#111',
  	alignSelf:'center'
  },
  button:{
  	height:45,
  	flexDirection:'row',
  	backgroundColor:'white',
  	borderWidth:1,
  	borderRadius:8,
  	marginBottom:10,
  	marginTop:10,
  	alignSelf:'stretch',
  	justifyContent:'center'
  },
});

module.exports = DemoSn;
