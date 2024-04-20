import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../FirebaseConfig/Firebase.config";
const auth = getAuth(app);
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    createNewUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
