import { useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext(null);
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../FirebaseConfig/Firebase.config";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const githubProvider=new GithubAuthProvider();
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googlePopupLogin = () => {
    return signInWithPopup(auth, provider);
  };
  const githubLogin=()=>{
    return signInWithPopup(auth,githubProvider);

  }
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOutUser = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
    });
    return () => {
      unSubscribe();
    };
  });
  const authInfo = {
    user,
    createNewUser,
    signInUser,
    logOutUser,
    googlePopupLogin,
    githubLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
