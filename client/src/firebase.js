import *as firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBGXf3wXdgp5t078HKp38GDMqNlfP-hk-s",
    authDomain: "sixfeetapp-48d90.firebaseapp.com",
    databaseURL: "https://sixfeetapp-48d90.firebaseio.com",
    projectId: "sixfeetapp-48d90",
    storageBucket: "sixfeetapp-48d90.appspot.com",
    messagingSenderId: "660464582061",
    appId: "1:660464582061:web:be78417a1cee358a7a3524",
    measurementId: "G-YN4Z0R84GQ"
});

export default app;