import { join } from 'path';

export const config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.ts'
    ],
    maxInstances: 1,

    capabilities: [{
        platformName: "Android",
        "appium:deviceName": "emulator-5554",
        "appium:platformVersion": "12",
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
        timeout: 200000
    },
    reporters: ['spec'],

    onPrepare: () => {
        console.log('Preparing for mobile test execution...');
    },
};