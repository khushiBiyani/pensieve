import React, { useState, useEffect, createContext } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  // Create useStates here and insert them in value, import AuthContext and extract them from there.

  const [dark, setDark] = useState(true);
  return (
    <AuthContext.Provider
      value={{
        dark,
        setDark,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContext;
export { AuthContextProvider };
