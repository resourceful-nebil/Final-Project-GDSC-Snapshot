import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import Header from "./components/home/Header";
import Mountain from "./pages/Mountain";
import Birds from "./pages/Birds";
import Beaches from "./pages/Beaches";
import Food from "./pages/Food";
import Search from "./components/home/Search";

//<https://api.unsplash.com/search/photos?page=1&query=office>

function App() {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate("/search");

  const onSubmit = (search) => {
    setSearch(search);
    navigate("/search");
    // <Navigate to="/search" />;
    // const history = useHistory();
    // history.push("/search");
  };
  // console.log("app " + search);

  return (
    <div>
      <Header onSubmit={onSubmit} />
      <Routes>
        <Route index element={<Mountain />} />
        <Route path="/food" element={<Food />} />
        <Route path="/birds" element={<Birds />} />
        <Route path="/beaches" element={<Beaches />} />
        <Route path="/search" element={<Search name={search} />} />
      </Routes>
    </div>
  );
}

export default App;
