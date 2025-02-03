import 'dotenv/config'

export const config: WebdriverIO.Config = {

    user: process.env.BROWSERSTACK_USERNAME ,
    key: process.env.BROWSERSTACK_ACCESS_KEY ,
    hostname: 'hub.browserstack.com',

    services: [  [
        'browserstack',
        {
          app: process.env.BROWSERSTACK_APP_ID,
          browserstackLocal: true
        },
      ]],

    tsConfigPath: './tsconfig.json',
    
    specs: [
        '../test/specs/**/*.ts'
    ],

    exclude: [
        './node_modules/**'
    ],
  

    capabilities: [{
        'bstack:options': {
            deviceName: 'Samsung Galaxy S22 Ultra',
            platformVersion: '12.0',
            platformName: 'android',
        },
        "appium:automationName": "UIAutomator2",
    }
],

    maxInstances: 10,
    logLevel: 'info',
    logLevels: {
        webdriver: 'info',
        '@wdio/appium-service': 'info'
    },

    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 1400000
    },
}
