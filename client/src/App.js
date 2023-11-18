import "./App.css";

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import { useSelector } from "react-redux";
function App() {
  const login = useSelector((state) => state.auth.login);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={login ? <Home /> : <SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
