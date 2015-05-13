'use strict';

var React = require('react-native');
var OfferList = require('./offer-list');

var { PropTypes, ListView, Component, View, Text } = React;

module.exports = React.createClass({
  props: {
    offers: PropTypes.array.isRequired
  },

  getInitialState: function () {
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.name !== r2.name
    });

    return {
      dataSource: ds.cloneWithRows(this.props.offers)
    };
  },

  render: function () {
    return (
      <View>
        <OfferList
          dataSource={this.state.dataSource}/>
        <Text>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});