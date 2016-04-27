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
  Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
var Home = require('./HOME');
var DemoSn = require('./DemoSn');
var Header = require('./Header');


const HOME = 'home';
const HOME_NORMAL = require('./images/tabs/homepage_menu_bar_icon_btn_normal_house.png');
const HOME_FOCUS = require('./images/tabs/homepage_menu_bar_icon_btn_selected_house.png');
const CATEGORY = 'category';
const CATEGORY_NORMAL = require('./images/tabs/category_normal.png');
const CATEGORY_FOCUS = require('./images/tabs/category_focus.png');
const FAXIAN = 'faxian';
const FAXIAN_NORMAL = require('./images/tabs/faxian_normal.png');
const FAXIAN_FOCUS = require('./images/tabs/faxian_focus.png');
const CART = 'cart';
const CART_NORMAL = require('./images/tabs/cart_normal.png');
const CART_FOCUS = require('./images/tabs/cart_focus.png');
const PERSONAL = 'personal';
const PERSONAL_NORMAL = require('./images/tabs/personal_normal.png');
const PERSONAL_FOCUS = require('./images/tabs/personal_focus.png');

class Main extends Component {
  constructor(props) {
      super(props);
      this.state = {selectedTab: HOME}
  }
  _renderTabItem(img, selectedImg, tag, childView) {
      return (
          <TabNavigator.Item
              selected={this.state.selectedTab === tag}
              renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
              renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
              onPress={() => this.setState({ selectedTab: tag })}>
              {childView}
          </TabNavigator.Item>
      );
  }
  static _createChildView(tag) {
        return (
            <View style={{flex:1,backgroundColor:'#00baff',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:22}}>{tag}</Text>
            </View>
        )
    }
  render() {
    return (
      <View style={{flex: 1}}>
       <Header />
        <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
            {this._renderTabItem(HOME_NORMAL, HOME_FOCUS, HOME, <Home/>)}
            {this._renderTabItem(CATEGORY_NORMAL, CATEGORY_FOCUS, CATEGORY, <DemoSn/>)}
            {this._renderTabItem(FAXIAN_NORMAL, FAXIAN_FOCUS, FAXIAN, <Header/>)}
            {this._renderTabItem(CART_NORMAL, CART_FOCUS, CART, Main._createChildView(CART))}
            {this._renderTabItem(PERSONAL_NORMAL, PERSONAL_FOCUS, PERSONAL, Main._createChildView(PERSONAL))}
        </TabNavigator>
    </View >
    );
  }
}

const styles = StyleSheet.create({
    tab: {
        height: 52,
        backgroundColor: '#303030',
        alignItems: 'center',
    },
    tabIcon: {
        width: 30,
        height: 30,
        resizeMode: 'stretch',
        marginTop: 12.5
    }
});

module.exports = Main;
