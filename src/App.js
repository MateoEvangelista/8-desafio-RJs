import "./styles.css";

//NavBar
import NavBar from "./components/NavBar";
//Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/itemListContainer";
import Products from "./components/itemListContainer";
import Item from "./components/itemDetailContainer";

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Products />} />
          <Route path="/item/:id" element={<Item />} />
        </Routes>
      </div>
    </Router>
  );
}
