import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import Mypage from "./pages/Mypage";
import Posting from "./pages/Posting";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/mypage/:id" element={<Mypage />} />
      <Route path="/posting" element={<Posting />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
