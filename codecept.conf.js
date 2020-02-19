const { setHeadlessWhen } = require("@codeceptjs/configure");

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Protractor: {
      url: "http://todomvc.com/examples/angularjs/",
      driver: "hosted",
      browser: process.env.BROWSER || "chrome",
      rootElement: "body",
      angular: true
    }
  },
  include: {
    I: "./steps_file.js"
  },
  bootstrap: null,
  mocha: {},
  name: "codeceptjs-selenium-hub",
  plugins: {
    wdio: {
      enabled: true,
      services: ["selenium-standalone"]
    },
    retryFailedStep: {
      enabled: false
    },
    screenshotOnFail: {
      enabled: true
    }
  }
};
