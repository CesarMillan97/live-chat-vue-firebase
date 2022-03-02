import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
   apiKey: "AIzaSyC-8okzcmAhsvvH5H1QXLC_FAfIeguFzvY",
   authDomain: "vuejs-firebase-site.firebaseapp.com",
   projectId: "vuejs-firebase-site",
   storageBucket: "vuejs-firebase-site.appspot.com",
   messagingSenderId: "974393435683",
   appId: "1:974393435683:web:8fe2d744c2fb19ab757396"
 };

 //init firebase
 firebase.initializeApp(firebaseConfig)
const projectAuth = firebase.auth()
 const projectFirestore = firebase.firestore()
 const timestamp = firebase.firestore.FieldValue.serverTimestamp

 export { projectFirestore, timestamp, projectAuth }