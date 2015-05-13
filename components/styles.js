'use strict';

var { StyleSheet } = require('react-native');

module.exports = {
  offerList: StyleSheet.create({
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      height: 120,
      padding: 10,
      backgroundColor: '#F6F6F6'
    },
    separator: {
      height: 1,
      backgroundColor: '#CCCCCC'
    }
  })
};