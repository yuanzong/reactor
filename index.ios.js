'use strict';

var React = require('react-native');
var App = require('./components/app');

var { AppRegistry, StyleSheet, Text, View } = React;

var mock = require('./mock.json');

var styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20
  }
});

var Reactor = React.createClass({
  render: function () {
    return (
      <View>
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
