/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-loading-spinner',

  included: function(app) {
    this._super.included(app);

    app.import('node_modules/spin.js/spin.js');
  }
};

