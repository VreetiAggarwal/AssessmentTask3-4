import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/login";
import Home from "./components/pages/home";
import Password from "./components/pages/password";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/password" element={<Password />}></Route>
      </Routes>
    </div>
  );
}

export default App;
