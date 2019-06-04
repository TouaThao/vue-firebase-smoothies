import firebase from 'firebase'
import 'firebase/firestore'

// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyBz2WxDwcHhPA8QCp-rJF58_IPkW9AS32Y",
    authDomain: "vuefirebasesmoothies.firebaseapp.com",
    databaseURL: "https://vuefirebasesmoothies.firebaseio.com",
    projectId: "vuefirebasesmoothies",
    storageBucket: "vuefirebasesmoothies.appspot.com",
    messagingSenderId: "558423820165",
    appId: "1:558423820165:web:1c3ea39c052aeada"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);
// firebaseApp.firestore().settings({timestampsInSnapshots:true})
//export firebase
export default firebaseApp.firestore()