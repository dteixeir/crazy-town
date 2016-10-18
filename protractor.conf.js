// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/docs/referenceConf.js

/*global jasmine */
var SpecReporter = require('jasmine-spec-reporter');
var JasmineReporters = require('jasmine-reporters');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/project_test.js'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  // directConnect: true,
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  chromeDriver: '/e2e/chromedriver.exe',
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  useAllAngular2AppRoots: true,
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e'
    });
  },
  onPrepare: function() {
    jasmine.getEnv().addReporter(new SpecReporter());
    jasmine.getEnv().addReporter(new JasmineReporters.JUnitXmlReporter(null, true, true));
  }
};
