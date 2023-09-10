import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Product } from "./Product";
import TempComponents from "./TempComponents";
import MainCompo from "./MainCompo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainCompo />} />
        <Route path="/products" element={<Product />} />
        <Route path="/temp" element={<TempComponents />} />
      </Routes>
    </Router>
  );
}

export default App;
