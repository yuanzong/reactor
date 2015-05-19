'use strict';

var React = require('react-native');

var { ListView, PropTypes, Text, Image, View } = React;

var styles = require('./styles');

module.exports = React.createClass({
  props: {
    dataSource: PropTypes.object.isRequired
  },

  renderRow: function (row) {
    return (
      <Image
        source={{uri: row.image}}
        style={styles.offerContainer}>
        <Text>{row.name}</Text>
      </Image>
    );
  },

  render: function () {
    return (
      <ListView
        dataSource={this.props.dataSource}
        renderRow={this.renderRow}
        />
    )
  }
});
