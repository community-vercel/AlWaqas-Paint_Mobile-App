
# Al-Waqas Paint - React Native Expo (WebView) App

A mobile application for Al-Waqas Paint built with React Native and Expo that displays the company website in a WebView with enhanced mobile features.

Features
WebView integration for seamless website display

Network connectivity monitoring

Custom loading indicator

Android navigation bar customization

Cross-platform support (Android, iOS, Web)

Offline handling with user-friendly messages

Prerequisites
Node.js (v14 or later)

npm or yarn

Expo CLI (installed globally)

Android Studio/Xcode (for native builds)

Installation
Clone the repository:

bash
git clone https://github.com/community-vercel/AlWaqas-Paint_Mobile-App
cd al-waqas-paint
Install dependencies:

bash
npm install
# or
yarn install
Start the development server:

bash
npx expo start
Available Scripts
npm start - Start the Expo development server

npm run android - Run on Android device/emulator

npm run ios - Run on iOS simulator (macOS only)

npm run web - Run in web browser


Dependencies
Main Dependencies
expo: ~53.0.17

react: 19.0.0

react-native: 0.79.5

react-native-webview: 13.13.5

expo-navigation-bar: ^4.2.7

expo-network: ~7.1.5

expo-status-bar: ~2.2.3

Development Dependencies
@babel/core: ^7.20.0

Configuration
The app is configured to:

Hide the status bar

Customize Android navigation bar behavior

Monitor network connectivity

Display loading indicators during WebView loading

Show error messages when offline

Customization
To change the website URL, modify the uri property in the WebView component:

javascript
<WebView
  source={{ uri: 'https://www.alwaqaspaint.com' }}
  // ... other props
/>
Troubleshooting
Common Issues
WebView not loading:

Check network connection

Verify the website URL is correct and accessible

Ensure proper internet permissions are set in app.json

Android navigation bar not hiding:

Verify you're testing on a supported Android version

Check for error messages in the console

Expo build issues:

Clear Expo cache with expo start -c

Update Expo CLI with npm install -g expo-cli
