import React from "react";
import Navbarcomponent from "./crud/Navbarcomponent";
import Books from "./crud/books";
import Peminjam from "./crud/peminjam";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <>
        <Router>
          <div>
            <Navbarcomponent />
            <Routes>
              <Route path="/bookss" element={<Books />} />
              <Route path="/peminjams" element={<Peminjam />} />
            </Routes>
          </div>
        </Router>
      </>
    </div>
  );
};
export default App;
