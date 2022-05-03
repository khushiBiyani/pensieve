import Login from "./login";
import AuthContext from "../../context/AuthContext";
import { useState, useContext } from "react";
import Dashboard from "./dashboard";
// import Login from "./pages/login";

function App() {
  const { user } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  // console.log(user);
  return (
    // <>{user.name === "admin" ? <AdminDashboard /> : <StudentDashboard />}</>
    <>
      <>{show === false && <Login setShow={setShow} />}</>
      <>{show === true && <Dashboard />}</>
    </>
  );
}

export default App;
