
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';


const off = [
    require('./images/home_icons/room_list_btn2_normal.png'),
    require('./images/home_icons/room_list_btn2_selected.png')
];
const on = [
    require('./images/home_icons/homepage_room_list_btn1_normal.png'),
    require('./images/home_icons/homepage_room_list_btn1_selected.png')
];
const light = [
    require('./images/home_icons/homepage_room_list_btn3_normal.png'),
    require('./images/home_icons/homepage_room_list_btn3_selected.png')
];

class LightModOpt extends Component {
  constructor(props){
    super(props);
    
    this.state = { 
      on_idx:0, 
      off_idx:0,
      light_idx:0
    }
  }
  handleChange(idx) {
    if (idx === 0) {
      this.setState({
        on_idx:0, 
        off_idx:1,
        light_idx:0
      });
    } else if (idx === 1) {
      this.setState({
        on_idx:1, 
        off_idx:0,
        light_idx:0
      });
    } else {
      this.setState({
        on_idx:0, 
        off_idx:0,
        light_idx:1
      });
    }
    
  }
  render() {
    return (
      <View>
      <Image source={{uri: 'https://home.zeroiot.com/group1/M00/00/01/Ci0JoFcEir-ACNLIAAC_vvJAe1c625.png'}} style={{height: 136}} >
      <View style={styles.roomView}>
        <Text style={styles.roomName}>客厅</Text>
        <View style={styles.roomBtnView}>
        <TouchableHighlight onPress={this.handleChange.bind(this, 0)} underlayColor="transparent">
          <View style={styles.btnImgTt}>
            <Image source={off[this.state.off_idx]} style={styles.roomListBtn2}/>
            <Text>关灯</Text>
          </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.handleChange.bind(this, 1)} underlayColor="transparent">
          <View style={styles.btnImgTt}>
            <Image source={on[this.state.on_idx]} style={styles.roomListBtn2}/>
            <Text>开灯</Text>
          </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.handleChange.bind(this, 2)} underlayColor="transparent">
          <View style={styles.btnImgTt}>
            <Image source={light[this.state.light_idx]} style={styles.roomListBtn2}/>
            <Text>照明</Text>
          </View>
          </TouchableHighlight>
        </View>
      </View>
      </Image>
    </View>

    );
  }
}

const styles = StyleSheet.create({
  roomView: {
    height: 100,
    alignItems:'flex-end',
    justifyContent: 'center',
    marginTop:10,
    //marginBottom:10,
    paddingRight: 40,
  },
  roomName: {
    fontSize:20,
    color:'#000000',
  },
  roomListBtn2: {
      height: 32,
      width: 32,
      resizeMode: 'stretch',

  },
  roomBtnView: {
    paddingTop:24,
    flexDirection:'row',
    alignItems: 'flex-end',
  },
  btnImgTt:{
    paddingLeft: 10,
  },
});

module.exports = LightModOpt;