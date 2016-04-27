
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';

const onoff = [
    require('./images/home_icons/control_btn_off.png'),
    require('./images/home_icons/control_btn_on.png')
];

class ControlSwitch extends Component {
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
      <View>
	      <View>
		     
		      <Image source={onoff[0]} style={{height: 24,width:48}} />
	      </View>
        
    </View>

    );
  }
}

const styles = StyleSheet.create({
 
});

module.exports = ControlSwitch;