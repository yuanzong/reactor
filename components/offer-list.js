'use strict';

var moment = require('moment');
var React = require('react-native');

var { ListView, PropTypes, Text, Image, View } = React;

var styles = require('./styles');
var offerType = require('../offer-type');

module.exports = React.createClass({
  props: {
    dataSource: PropTypes.object.isRequired
  },

  renderRow: function (row) {
    var offer = row.offer;
    return (
      <View style={[styles.offerContainer, styles.rounded]}>
        <Image
          source={{uri: row.image}}
          style={[styles.offerImage, styles.rounded]}>
          <Text style={styles.offerBannerText}>
            {row.name}
          </Text>
          <View style={styles.offerBadge}>
            <Text style={styles.offerBadgeText}>
              {offer.free ? 'Ride on us!' : 'Save $' + offer.credit}
            </Text>
          </View>
        </Image>
        <View style={styles.offerDetail}>
          <Text>{row.name}</Text>
        </View>
      </View>
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
