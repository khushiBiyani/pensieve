import React, { useState, useEffect, createContext } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
    // Create useStates here and insert them in value, import AuthContext and extract them from there.
  const [a, setA] = useState(0);

  return (
    <AuthContext.Provider
      value={{
        a,
        setA,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContext;
export { AuthContextProvider };
