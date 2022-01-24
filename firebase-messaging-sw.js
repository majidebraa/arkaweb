importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyAuWmcS_GmxgQyUfLvReTz3_nYAlw7GO80",
  authDomain: "arka-flutter.firebaseapp.com",
  databaseURL: "https://arka-flutter.firebaseio.com",
  projectId: "arka-flutter",
  storageBucket: "arka-flutter.appspot.com",
  messagingSenderId: "211073142422",
  appId: "1:211073142422:web:740ee5848a2e99bc6e3cb7",
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});
messaging.