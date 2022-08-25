import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Mypage from "./pages/Mypage";
import ReviseMypage from "./pages/ReviseMypage";
import Posting from "./pages/Posting";
import Home from "./pages/Home";

function App() {
  return (
    <div className="layout">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/mypage/:id" element={<Mypage />} />
        <Route path="/revisemypage/" element={<ReviseMypage />} />
        <Route path="/revisemypage/:id" element={<ReviseMypage />} />
        <Route path="/posting" element={<Posting />} />
      </Routes>
    </div>
  );
}

export default App;
