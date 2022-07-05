import {initializeApp} from 'firebase/app'
import {
    getFirestore,collection} from 'firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBbipY0IdPOmGpEApmUlC3Gx1kETsaIt6M",
    authDomain: "library-management-2cc59.firebaseapp.com",
    projectId: "library-management-2cc59",
    storageBucket: "library-management-2cc59.appspot.com",
    messagingSenderId: "373116217486",
    appId: "1:373116217486:web:054aab9d0cdc102608c1df",
    measurementId: "G-VB8GT9JNKG"
  };
  //init firebase
  initializeApp(firebaseConfig)

  //init services
  const db=getFirestore()
  
  //collection Ref
  const colRef= collection(db,'premium')

  //get collection data
 export {db,colRef}