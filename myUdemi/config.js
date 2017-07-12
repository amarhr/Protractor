exports.config = {
  framework: 'jasmine',
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./pages/*/*.spec.js'],
  params: {
      url: 'https://www.etsy.com/'
  },
  suites: {
      cart: 'pages/cart/**/*.spec.js',
      home: 'pages/home/**/*.spec.js',
      search: 'pages/search/**/*.spec.js'
  },
  scripts: {
      pree2e: "webdriver-manager update --standalone false --gecko false",
      e2e: "protractor"
  },
  onPrepare: function() {
      browser.ignoreSynchronization = true;
  },

  jasmineNodeOpts: {
      defaultTimeoutInterval: 25000
  },
  browserName: 'chrome',
  directConnect: true
}
