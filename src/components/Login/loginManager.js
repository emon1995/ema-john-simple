import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFramework =() =>{
    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}


export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider).then((result) => {
      const {displayName, photoURL, email} = result.user;
      const signedInUser = {
        isSignIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
        success: true,
      }
      return signedInUser;

    }).catch((err) => {
      console.log(err);
      console.log(err.massage);
    })
  }


  export const handleFbSignIn = () => {
    let fbProvider = new firebase.auth.FacebookAuthProvider();

   return firebase
  .auth()
  .signInWithPopup(fbProvider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    var user = result.user;

    var accessToken = credential.accessToken;
    user.success = true;
    return user;
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    // ...
  });
  }

  export const handleSignOut = () => { 
    return firebase.auth().signOut().then(res => {
      const SingedOutUser = {
        isSignIn: false,
        name: "",
        email: "",
        password: '',
        photo: "",
        error: "",
        success: false,
      }
      return SingedOutUser
    }).catch(err => {
      console.log(err.massage);
    })
  }

  export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((res) => {
      // Signed in 
      const newUserInfo = res.user
      newUserInfo.error = "";
      newUserInfo.success = true;
      updateUserInfo(name)
      return newUserInfo;
      // ...
    })
    .catch((err) => {
      const newUserInfo = {}
      newUserInfo.error = err.message;
      newUserInfo.success = false;   
      return newUserInfo;
    });
  }

  export const signInWithEmailAndPassword = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((res) => { 
      // Signed in
      const newUserInfo = res.user
      newUserInfo.error = "";
      newUserInfo.success = true;
      return newUserInfo;
    })
    .catch((err) => {
      const newUserInfo = {}
      newUserInfo.error = err.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
  }
   
  const updateUserInfo = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
      
    }).then(() => {
      console.log("user name updated successfully");
    }).catch((error) => {
      console.log(error);
    });  

  }