/* eslint-disable no-undef */
// Import Firebase scripts
importScripts('https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.11/firebase-messaging.js');

// Initialize Firebase (must match your firebase.ts config)
firebase.initializeApp({
  apiKey: "AIzaSyAWaW8FBLIjz9KHXA1_ll4yCWwj7cJZmMI",
  authDomain: "frontendmsg.firebaseapp.com",
  projectId: "frontendmsg",
  storageBucket: "frontendmsg.firebasestorage.app",
  messagingSenderId: "457714421954",
  appId: "1:457714421954:web:29e0fa4318f612667ceb5b",
  measurementId: "G-NVJYHHWSNF",
});

// Retrieve Firebase Messaging
const messaging = firebase.messaging();

// Background messages handler
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/img/icons/icon-192x192.png',
  });
});
