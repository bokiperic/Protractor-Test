exports.config = {

  // Doing tests directly w/o need to start webdriver-manager
  directConnect:true,
  
  //capabilities to be passed to the webdriver instance
  capabilities: {
    'browserName': 'chrome',
    // For using headless Chrome
//    chromeOptions: {
//    	args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
//  		}
    
//    'browserName': 'firefox'
    //For using headless Firefox
//    'moz:firefoxOptions': {
//    	args: [ "--headless" ]
//    }
    
//    'browserName': 'i.*explorer'
//    'browserName': 'safari'
  },

  //Framework to use. Jasmine2 is recommended.
  framework: 'jasmine2',

  // Jasmine Allure Reporter
  onPrepare: () => {
    let AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));
    // Taking screenshot after every 'afterEach' method
    jasmine.getEnv().afterEach((done) => {
      browser.takeScreenshot().then((png) => {
        allure.createAttachment('Screenshot', () => {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      });
    });
  },

  // onComplete: () => {
  //   console.log("Sending mail with reports for the test execution.");
  //   let sys = require('util');
  //   let exec = require('child process').exec;
  //   function puts(error, stdout, stderr) {
  //     sys.puts(stdout)
  //   }
  //   exec("node mail.js", puts);
  // },

  // Only needed when you don't have 'directConnect'
  // seleniumAddress: 'http://localhost:4444/wd/hub',

  // Spec patterns are relative to the current working directly when protractor is called
  specs: ['GmailTest.js'],

  // Options to be passed to Jasmine
  jasmineNodeOpts: {
	showColors: true,
    defaultTimeoutInterval: 30000
  }
}