import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SebelasA from "./Pages/SebelasA";
import SebelasB from "./Pages/SebelasB";
import NotFound from "./Pages/404";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SebelasA" element={<SebelasA />} />
        <Route path="/SebelasB" element={<SebelasB />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
