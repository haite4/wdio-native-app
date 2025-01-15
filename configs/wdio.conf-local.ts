import { join } from 'path';

export const config = {
    runner: 'local',
    specs: [
        '../test/specs/**/*.ts'
    ],

    maxInstances: 1,

    capabilities: [{
        platformName: "Android",
        "appium:deviceName": "Pixel 8 Pro API 35",
        "appium:platformVersion": "15",
        "appium:automationName": "UiAutomator2",
        "appium:app": join(process.cwd(), "./android-native-app.apk"),
        "appium:autoAcceptAlerts": true,
        "appium:appWaitActivity": "*",
        "appium:noReset": false,
        "appium:fullReset": false,
    }],

    services: [
        ['appium', {
            command: 'appium',  
            args: {
                relaxedSecurity: true,  
            }
        }]
    ],

    port: 4723,  
    framework: 'mocha',
    mochaOpts: {
        timeout: 1400000
    },

    reporters: ['spec'],

    onPrepare: () => {
        console.log('Preparing for mobile test execution...');
    },
};