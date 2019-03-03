/*
 * This code is developed to demonstrate the use of ReactJS and ReactNatice
 * The deelopment also allows me to demonstrate my capabilities using the framework
 * Following create-react-app methods, the file structure is made from scratch
 * Copyright - World Food Programmes - Digital Transformation
 */

import React, { Component } from "react";
import { StyleSheet, View, Text, WebView, Linking } from "react-native";

/*
 * This code is developed to demonstrate the use of ReactJS and ReactNatice
 * The deelopment also allows me to demonstrate my capabilities using the framework
 * Following create-react-app methods, the file structure is made from scratch
 * Copyright - World Food Programmes - Digital Transformation
 */

import { UserAgent, Source, Uri } from "./Constants";
import { Styles } from "./Style";

/*
 * This code is developed to demonstrate the use of ReactJS and ReactNatice
 * The deelopment also allows me to demonstrate my capabilities using the framework
 * Following create-react-app methods, the file structure is made from scratch
 * Copyright - World Food Programmes - Digital Transformation
 */

class Main extends Component {
  render() {
    let Error = <View color="primary" style={Style.errorpage}> 
     <Text style={Style.errormessage}> Please try again later ...</Text>
     <Text style={Style.errorlink} onPress={() => window.location.href = Uri}>Click her for Web Platform</Text>
    </View>;
    return (
      <View 
        color="primary" 
        style={Style.view}
        >
        <WebView
          source={Source}
          userAgent={UserAgent}
          style={Style.webview}
          allowFileAccess={true}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          thirdPartyCookiesEnabled={true}
          automaticallyAdjustContentInsets={false}
          allowUniversalAccessFromFileURLs={true}
          onError={function(e){return Error;}}
          renderError={function(e){return Error;}}
          renderLoading={function(e){return Error;}}
          onLoadStart={function(e){return Error;}}
        />
      </View>
    );
  }
}

/*
 * This code is developed to demonstrate the use of ReactJS and ReactNatice
 * The deelopment also allows me to demonstrate my capabilities using the framework
 * Following create-react-app methods, the file structure is made from scratch
 * Copyright - World Food Programmes - Digital Transformation
 */

console.disableYellowBox = true;
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];3

/*
 * This code is developed to demonstrate the use of ReactJS and ReactNatice
 * The deelopment also allows me to demonstrate my capabilities using the framework
 * Following create-react-app methods, the file structure is made from scratch
 * Copyright - World Food Programmes - Digital Transformation
 */

const Style = StyleSheet.create(Styles);
export default Main;
