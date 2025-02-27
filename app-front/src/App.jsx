import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PowerBI from "./pages/PowerBI/PowerBI";
import Excel from "./pages/Excel/Excel";
import Python from "./pages/Python/Python";
import SQL from "./pages/SQL/SQL";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/powerbi" element={<PowerBI />} />
        <Route path="/excel" element={<Excel />} />
        <Route path="/python" element={<Python />} />
        <Route path="/sql" element={<SQL />} />
      </Routes>
    </Router>
  );
}

export default App;