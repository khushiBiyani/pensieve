import React, { useState, useEffect, createContext } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  // Create useStates here and insert them in value, import AuthContext and extract them from there.

  const [dark, setDark] = useState(true);
  const [currentBatch, setCurrentBatch] = useState(true);
  return (
    <AuthContext.Provider
      value={{
        dark,
        setDark,
        currentBatch,
        setCurrentBatch,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContext;
export { AuthContextProvider };
