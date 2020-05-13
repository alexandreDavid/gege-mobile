import firebase from 'firebase/app'

import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAbE32YdlFSUUOssrUZ6yxXuUAxJ4zM0a0',
  authDomain: 'gege-mobile.firebaseapp.com',
  databaseURL: 'https://gege-mobile.firebaseio.com',
  projectId: 'gege-mobile',
  storageBucket: 'gege-mobile.appspot.com',
  messagingSenderId: '1093511905182',
  appId: '1:1093511905182:web:33cc438121d13a6229e08f',
  measurementId: 'G-JJNB159XLR'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

export const db = firebase
  .firestore()

export const auth = firebase.auth()

export const storage = firebase.storage()
