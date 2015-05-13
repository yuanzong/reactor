'use strict';

var React = require('react-native');
var App = require('./components/app');

var { AppRegistry, StyleSheet, Text, View } = React;

var mock = require('./mock.json');

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  app: {
    backgroundColor: '#F5FCFF',
    borderWidth: 2,
    borderColor: '#00ff00'
  }
});

var Reactor = React.createClass({
  render: function () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <View style={styles.app}>
          <App offers={mock.offers}/>
        </View>
      </View>
    );
  }
});

AppRegistry.registerComponent('Reactor', () => Reactor);
