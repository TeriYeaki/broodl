'use client';
import { auth } from '@/firebase';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getDoc } from 'firebase/firestore';
import React, { useConText, useState, useEffect } from 'react';

const AuthContext = React.createContext();

export function useAuth() {
  return useConText(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userDataObj, setUserDataObj] = useState(true);
  const [loading, setLoading] = useState(true);

  // AUTH HANDLERS
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    setUserDataObj({});
    setCurrentUser(null);
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        // Set the user to our local context state
        setLoading(true);
        setCurrentUser(user);
        if (!user) {
          console.log('No User Found');
          return;
        }

        // if user exist fetch data from firestore database
        console.log('Fetching User Data');
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        let firebaseData = {};
        if (docSnap.exists()) {
          console.log('Found User Data');
          firebaseData = docSnap.get.data();
          console.log(firebaseData); // TODO: delete this in production
        }
        setUserDataObj(firebaseData);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userDataObj,
    signup,
    logout,
    login,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
