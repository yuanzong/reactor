'use strict';

var { StyleSheet } = require('react-native');

var black = '#000000';
var blue = '#1EACC7';
var white = '#FFFFFF';
var green = '#27AA0B';
var orange = '#F32F00';
var yellow = '#FFC000';

module.exports = StyleSheet.create({
  // shared
  rounded: {
    borderRadius: 2
  },

  appContainer: {
    backgroundColor: white,
    padding: 2
  },

  offerContainer: {
    margin: 2,
    shadowColor: black,
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },

  offerImage: {
    height: 140,
    resizeMode: 'cover'
  },

  offerBannerText: {
    containerBackgroundColor: black,
    opacity: 0.7,
    color: white,
    padding: 5,
    fontSize: 11
  },

  offerBadge: {
    marginTop: 90,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent'
  },

  offerBadgeText: {
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 6,
    paddingRight: 6,
    containerBackgroundColor: orange,
    color: white,
    fontSize: 8,
    fontWeight: 'bold'
  },

  offerDetail: {
    backgroundColor: white,
    padding: 10
  }
});
