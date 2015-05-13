'use strict';

var React = require('react-native');
var { ListView, PropTypes, Text } = React;

module.exports = React.createClass({
  props: {
    dataSource: PropTypes.object.isRequired
  },

  renderRow: function (row) {
    return (
      <Text>{row.name}</Text>
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