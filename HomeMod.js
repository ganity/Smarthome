
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';


const gohome = [
    require('./images/home_icons/homepage_mode_btn_home.png'),
    require('./images/home_icons/homepage_mode_btn_normal_home.png')
];
const leavehome = [
    require('./images/home_icons/homepage_mode_btn_leave_home.png'),
    require('./images/home_icons/homepage_mode_btn_selected_leave_home.png')
];

class HomeMod extends Component {
  constructor(props){
    super(props);
    //this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    this.state = {
      //dataSource: this.ds.cloneWithRows(this.props.notes),
      homeMod:0, //0:回家,1:离家
      error:'',
      airMod:0
    }
  }
  makeImageSize(thismod) {
    var obj={
      height:32,
      width:32,
    }
    if (this.state.airMod === thismod) {
      obj={
        height:48,
        width:48
      };
    } 
    return obj;
  }
  handleHomeModChange(mod) {
    this.setState({
      homeMod: mod
    });
    
  }
  handleChange(n) {
    this.setState({
      airMod: n
    });
  }
  render() {
    if (this.props.air_home ===0) {
      return (
       <View style={styles.propView}>
         <TouchableHighlight
           onPress={this.handleHomeModChange.bind(this, 0)}
          underlayColor="transparent">
           <Image source={gohome[this.state.homeMod]} style={{width:72, height:72}}/>
          </TouchableHighlight>
         <TouchableHighlight
           onPress={this.handleHomeModChange.bind(this, 1)}
          underlayColor="transparent">
            <Image source={leavehome[this.state.homeMod]} style={{width:72, height:72}}/>
           </TouchableHighlight>
        </View>
      
      );
    } else {
      return(
        <View>
        <TouchableHighlight onPress={this.handleChange.bind(this, 0)} underlayColor="transparent">
          <View style={styles.onoff}>
            <Image source={require('./images/home_icons/homepage_air_conditioner_off.png')} style={styles.imageSize}/>
          </View>
        </TouchableHighlight>
          <View style={styles.modView}>
          <TouchableHighlight onPress={this.handleChange.bind(this, 0)} underlayColor="transparent">
            <View>
              <Image source={require('./images/home_icons/homepage_air_conditioner_icon_refrigeration.png')} style={this.makeImageSize(0)}/>
              <Text style={styles.textf}>制冷</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.handleChange.bind(this, 1)} underlayColor="transparent">
            <View>
              <Image source={require('./images/home_icons/homepage_air_conditioner_icon_heating.png')} style={this.makeImageSize(1)}/>
              <Text style={styles.textf}>制热</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.handleChange.bind(this, 2)} underlayColor="transparent">
            <View>
              <Image source={require('./images/home_icons/homepage_air_conditioner_icon_ventilated.png')} style={this.makeImageSize(2)}/>
              <Text style={styles.textf}>通风</Text>
            </View>
          </TouchableHighlight>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  propView: {
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop:24,
  },
  onoff: {
    flexDirection:'row',
    justifyContent: 'flex-end',
    paddingTop:10,
    paddingRight: 20,
  },
  modView:{
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textf: {
    fontSize:14,
    color:'#FFFFFF',
    //alignSelf:'center',
  },
  imageSize: {
    width:32, 
    height:32
  },

});

HomeMod.propTypes = {
  air_home: React.PropTypes.number.isRequired,
}

module.exports = HomeMod;