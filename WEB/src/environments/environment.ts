// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseURL : 'http://127.0.0.1:5001/',
  firebaseConfig: {
    apiKey: "AIzaSyCySahqymx0tT2a0twqRk-l_-aHmoBv0OE",
    authDomain: "login-68cd9.firebaseapp.com",
    databaseURL: "https://login-68cd9.firebaseio.com",
    projectId: "login-68cd9",
    storageBucket: "login-68cd9.appspot.com",
    messagingSenderId: "33076003673",
    appId: "1:33076003673:web:8a3ad17e27af79171c0248"
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
