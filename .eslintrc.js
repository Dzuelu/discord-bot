const defaultLint = require('dzuelu-eslint-config');

defaultLint.rules['node/no-missing-import'] = ["error", {
  "allowModules": ["@discordjs/rest"],
  "tryExtensions": [".js", ".ts"]
}];

module.exports = defaultLint;
