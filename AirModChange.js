import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';


var HomeMod = require('./HomeMod');


const btn = [
    'button_selected',
    'button'
];
const btn2 = [
    'button',
    'button_selected'
];


class AirModChange extends Component {
  constructor(props){
    super(props);
    
    this.state = { 
      home:1,
      air:0
    }
  }
  makeBackground(btn) {
	var obj={
	  height:28,
	  
	  width:200,
	  paddingLeft: 10,
	  paddingRight: 10,
    }
		if (btn === 0) {
			obj.backgroundColor='#00A3FF';
		} else {
			obj.backgroundColor='#87CEEB';
		}
		return obj;
  }
  handleChange(idx) {
    
    this.setState({
        home:idx,
        air:(idx+1)%2
    });
  }
  render() {
    return (
      <View style={styles.headView}>
           <HomeMod air_home={this.state.home}/>

         <View style={styles.buttonView}>
         
           <TouchableHighlight style={this.makeBackground(this.state.home)} onPress={this.handleChange.bind(this, 0)} underlayColor="transparent">
            <View style={styles.modView}>
            <Image source={require('./images/home_icons/mode_icon_home.png')} style={styles.modBtn}/>
            <Text style={styles.buttonText}>全屋模式</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={this.makeBackground(this.state.air)} onPress={this.handleChange.bind(this, 1)} underlayColor="transparent">
            <View style={styles.modView}>
            <Image source={require('./images/home_icons/mode_icon_air_conditioner.png')} style={styles.modBtn}/>
            <Text style={styles.buttonText}>空调设置</Text>
            </View>
          </TouchableHighlight>
        </View>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  button:{
	  height:28,
	  //flexDirection:'row',
	  backgroundColor:'#87CEEB',
	  //borderWidth:1,
	  //borderRadius:8,
	  //marginBottom:10,
	  //marginTop:10,
	  //alignSelf:'stretch',
	  //flex: 1,
	  //justifyContent:'flex-start'
	  width:200,
	  paddingLeft: 10,
	  paddingRight: 10,
  },
  button_selected:{
	  height:28,
	  //flexDirection:'row',
	  backgroundColor:'#00A3FF',
	  //borderWidth:1,
	  //borderRadius:8,
	  //marginBottom:10,
	  //marginTop:10,
	  //alignSelf:'stretch',
	  //flex: 1,
	  //justifyContent:'flex-start'
	  width:200,
	  paddingLeft: 10,
	  paddingRight: 10,
  },
  buttonText:{
	    fontSize:14,
	    color:'#FFFFFF',
	    alignSelf:'center',
  },
  buttonView: {
    height:24,
    flex: 1,
    flexDirection:'row',
    //marginBottom:1,
    //justifyContent:'flex-start',
    //alignSelf:'stretch',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  headView: {
    height:144,
    //flexDirection:'row',
    //marginBottom:1,
    //justifyContent:'flex-start',
    //alignSelf:'stretch',
    //alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#46A3FF',
  },
  
  modBtn:{
    height: 18,
    width: 18,
    resizeMode: 'stretch',
  },
  modView: {
    flexDirection:'row',
    justifyContent: 'center',
    paddingTop:3,
  },
});

module.exports = AirModChange;