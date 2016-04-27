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
  TextInput
} from 'react-native';



class Header extends Component {
  
  render() {
    return (
      <View style={styles.container}>
          <Image source={require('./images/header/icon_personal_center.png')} style={styles.logo}/>
          <View style={styles.searchBox}>
          <Text style={styles.searchBox1}>标题</Text>
          </View>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',   // 水平排布
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: Platform.OS === 'ios' ? 20 : 5,  // 处理iOS状态栏
        height: Platform.OS === 'ios' ? 68 : 24,   // 处理iOS状态栏
        backgroundColor: '#06A3FF',
        alignItems: 'flex-start'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中 center
    },
    logo: {
        height: 16,
        width: 16,
        resizeMode: 'stretch'  // 设置拉伸模式
    },

    searchBox: {
        height: 20,
        flexDirection: 'row',
        flex: 1,  // 类似于android中的layout_weight,设置为1即自动拉伸填充
        
        alignItems: 'center',
        marginLeft: 8,
        marginRight: 12,
        justifyContent: 'center',
    },

    searchBox1: {
        alignSelf:'stretch',
        justifyContent:'center',
        color:'#fff',
        fontSize: 12,
        textAlign: 'center',
    },
    
});

module.exports = Header;
