/*jshint node:true*/
module.exports = {

  normalizeEntityName: function() {},

  description: 'spin.js-based loading spinner generally used in route transitions',

  afterInstall: function(options) {
    return this.addBowerPackageToProject('spin.js', '2.3.2');
  }
};
