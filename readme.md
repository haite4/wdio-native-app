### Mobile Testing for native app

# WebdriverIO + Appium + BrowserStack

## Introduction
This repository contains automated tests using WebdriverIo, Appium, and BrowserStack written specifically for the application [Mobile Native app](https://github.com/webdriverio/native-demo-app). It includes test for login, webview, drag, swipe, home, forms tab.

## Requirements
- **Node.js**: >=20.0.0
- **Dependencies**:
    - `faker-js/faker`:^9.3.0
    - `dotenv`: ^16.4.7
    - `sharp`: ^0.33.5
    - `typescript`: ^5.7.2
  

## Steps to Install
1. Install Node.js:

    [Node.js](https://nodejs.org/en/download)

2. Clone the repository:
    ```sh
    https://github.com/haite4/wdio-native-app
    ```
3. Navigate to the project directory:
    ```sh 
    cd wdio-native-app
    ```
4. Install dependencies:
    ```sh
    npm install
    ```

## Steps to Launch

1. **Run webview tab in local by default**
    ```sh
     ./run-wdio.sh  -s webview.spec.ts
    ```
2. **Run home tab in local by default**
    ```sh
    ./run-wdio.sh  -s home.spec.ts
    ```
3. **Run login tab in local by default**
    ```sh
    ./run-wdio.sh  -s login.spec.ts
    ```
4. **Run forms tab in local by default**
    ```sh
    ./run-wdio.sh  -s forms.spec.ts
    ```
5. **Run swipe tab in local by default**
    ```sh
    ./run-wdio.sh  -s swipe.spec.ts
    ```

6. **Run drag tab in local by default**
    ```sh
     ./run-wdio.sh  -s drag.spec.ts
    ```

## env.example

1. **BROWSERSTACK_USERNAME=**
     You can get it when you create account on browserstack

2. **BROWSERSTACK_ACCESS_KEY=**
    You can get it when you create account on browserstack

3. **BROWSERSTACK_APP_ID**
   substitute your data and paste this command into a bash terminal

    ```sh
    curl -u "<browserstack_username>:<browserstack_access_key>" \
    -X POST "https://api-cloud.browserstack.com/app-automate/upload" \
    -F "file=@<path_to_your_mobileapp_apk>" 
    ```
