
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDFWjwXygBdKAZhUaLsFahK29VybDPlYoQ",
    authDomain: "linkedin-clone-a0247.firebaseapp.com",
    projectId: "linkedin-clone-a0247",
    storageBucket: "linkedin-clone-a0247.appspot.com",
    messagingSenderId: "406391504269",
    appId: "1:406391504269:web:e238cf3631e86b0e22d1c4"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);


  export { db };