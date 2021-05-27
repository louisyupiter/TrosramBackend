const firebase = require('firebase-admin');

var firebaseConfig = {
  apiKey: "AIzaSyAxsp5kpEpnK8IlZaronZNxgPf25oVXNzY",
  authDomain: "osram-d236c.firebaseapp.com",
  projectId: "osram-d236c",
  storageBucket: "osram-d236c.appspot.com",
  messagingSenderId: "958792022385",
  appId: "1:958792022385:web:b55a0fd45a185e4c151ed0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const bucket = firebase.storage().bucket();

module.exports = bucket;