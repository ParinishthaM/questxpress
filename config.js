import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAKZHdY2btERiivCw0PLJhSpPsIZCz2Kz4",
    authDomain: "questxpress-5638b.firebaseapp.com",
    projectId: "questxpress-5638b",
    storageBucket: "questxpress-5638b.appspot.com",
    messagingSenderId: "625409842709",
    appId: "1:625409842709:web:80ce8ce409909b8302781c"
};

// Initialize Firebase
if(!firebase.apps.length)
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   