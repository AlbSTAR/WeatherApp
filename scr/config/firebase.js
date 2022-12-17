// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD3iCHHJ49rQpPeoeJl2Xf1bbc6-H36kVY',
  authDomain: 'weatherapp-aa673.firebaseapp.com',
  projectId: 'weatherapp-aa673',
  storageBucket: 'weatherapp-aa673.appspot.com',
  messagingSenderId: '144403648332',
  appId: '1:144403648332:web:f3c41cab4269b861a3c9e9',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export {firebase};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// export default app;
