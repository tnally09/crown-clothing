import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc   
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAntqWiTt062K-1FZuusGARErHGh13cpu8",
  authDomain: "crwn-clothing-db-ceaa8.firebaseapp.com",
  projectId: "crwn-clothing-db-ceaa8",
  storageBucket: "crwn-clothing-db-ceaa8.appspot.com",
  messagingSenderId: "283667302057",
  appId: "1:283667302057:web:3166cb4eb382e60eb6cbb8"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation = {}
) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        }
        catch (error) {
            console.log('error creating user', error.message);
        }
    } else {
        return userDocRef;
    }
}

export const createAuthUserWithEmailandPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}