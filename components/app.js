'use strict';

var React = require('react-native');

var OfferList = require('./offer-list');
var styles = require('./styles');

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
      <View style={styles.appContainer}>
        <OfferList
          dataSource={this.state.dataSource}/>
      </View>
    );
  }
});
