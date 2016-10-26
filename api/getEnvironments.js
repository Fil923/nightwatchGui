'use strict';

var path = require('path');
var nightwatchConfig;

module.exports = function (nightwatchConfJsFolder, done) {
    try {
        console.log('reading conf file:', path.join(nightwatchConfJsFolder, 'nightwatch.conf.js'));
        nightwatchConfig = require(path.join(nightwatchConfJsFolder, 'nightwatch.conf.js'));
        //console.log(nightwatchConfig);

        if (typeof nightwatchConfig.test_settings !== 'object') {
            done('Wrong nightwatch configuration file');
            return;
        }

        done(null, nightwatchConfig.test_settings);
    } catch (e) {
        console.log(e);
        done(null, {chrome:{}});
    }
};