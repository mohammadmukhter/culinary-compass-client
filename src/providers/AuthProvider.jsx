import axios from "axios";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loginHandler = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const registerHandler = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateHandler = (userName, userPhotoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: userPhotoUrl,
    });
  };

  const googleHandler = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOutHandler = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", {
            email: currentUser.email,
          })
          .then((res) => {
            // console.log(res.data);
            const token = res.data;
            localStorage.setItem("access-token", token);
          })
          .catch((err) => console.log(err));
      } else {
        localStorage.removeItem("access-token");
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const AuthInfo = {
    user,
    loading,
    loginHandler,
    registerHandler,
    logOutHandler,
    updateHandler,
    googleHandler,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
