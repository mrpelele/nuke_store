import firebase from 'firebase/app'
import 'firebase/firestore'

var fireConfig = {};

const fc = firebase.initializeApp(fireConfig)

export const db = fc.firestore();