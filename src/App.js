/** @format */

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import ProfilePage from "./Components/User/ProfilePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/pornstars/:starID/:starRank"
            element={<ProfilePage />}
          />
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;
