import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SebelasA from "./Pages/SebelasA";
import SebelasB from "./Pages/SebelasB";
import NotFound from "./Pages/404";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tugas-siswa" element={<Home />} />
        <Route path="/tugas-siswa/SebelasA" element={<SebelasA />} />
        <Route path="/tugas-siswa/SebelasB" element={<SebelasB />} />
        <Route path="/tugas-siswa/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
