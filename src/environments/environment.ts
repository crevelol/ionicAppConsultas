// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    projectId: 'ionic-data-85e9f',
    appId: '1:954916908702:web:6006ced5f6ef0df75fd58f',
    storageBucket: 'ionic-data-85e9f.appspot.com',
    locationId: 'asia-east2',
    apiKey: 'AIzaSyBoCgSy4UyzHc_69TPwvulH3u0nOMXVGkY',
    authDomain: 'ionic-data-85e9f.firebaseapp.com',
    messagingSenderId: '954916908702',
    measurementId: 'G-J1K9G5J2L5',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
