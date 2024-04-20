import { useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext(null);
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../FirebaseConfig/Firebase.config";
const auth = getAuth(app);
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
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
    logOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
