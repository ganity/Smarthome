
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';

var ControlSwitch = require('./ControlSwitch');

class RoomControl extends Component {
  constructor(props){
    super(props);
    
    this.state = { 
      on_idx:0, 
      off_idx:0,
      light_idx:0
    }
  }
  handleChange(idx) {
    
    
  }
  render() {
    return (
      <View style={styles.container}>
	      <View style={styles.rowView}>
	      	<View style={styles.devandname}>
		      <Image source={require('./images/home_icons/homepage_room_list_btn3_selected.png')} style={{height: 32,width:32}} />
		      <Text>吊灯</Text>
		    </View>
		      <View style={styles.switch}><ControlSwitch/></View>
	      </View>
    </View>

    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection:'row',

  },
  rowView: {
  	flexDirection:'row',
  	paddingTop:10,
  	paddingLeft: 20,
  	flex: 1,
  	justifyContent: 'space-between',
  	alignItems:'center',
  },
  devandname: {
  	flexDirection:'row',
  },
  text: {
  	paddingTop:20,
  	paddingLeft: 10,
  },
  switch: {
  	flexDirection:'row',
  	alignItems:'flex-end',
    justifyContent: 'center',
    paddingRight: 20,
  },
});

module.exports = RoomControl;