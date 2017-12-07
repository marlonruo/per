cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova.plugins.diagnostic.Diagnostic",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.js",
    "pluginId": "cordova.plugins.diagnostic",
    "clobbers": [
      "cordova.plugins.diagnostic"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "com.tokbox.cordova.opentok": "3.0.0",
  "cordova.plugins.diagnostic": "3.7.2",
  "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});