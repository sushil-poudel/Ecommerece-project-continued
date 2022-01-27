import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const config= {
    apiKey: "AIzaSyDqympbmXBxdBfszkw2M9TGs8vxQxOVam4",
    authDomain: "own-ecommerce-project.firebaseapp.com",
    projectId: "own-ecommerce-project",
    storageBucket: "own-ecommerce-project.appspot.com",
    messagingSenderId: "941922621028",
    appId: "1:941922621028:web:169080ea46e5c7d9307171",
    measurementId: "G-6VHSTY03E5"
  };


  export const createUserProfileDocument=async (userAuth,additionalData)=>{
    if (!userAuth) return;

    const userRef= firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if (!snapShot.exists){
      const {displayName,email}=userAuth;
      const createdAt=new Date();
      try {
        await userRef.set({displayName,email,createdAt,...additionalData})  
      }catch(error){
        console.log('error creating user',error.message);
      }
    }
    return userRef;
  }
  // Initialize Firebase
  firebase.initializeApp(config);
  

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;
