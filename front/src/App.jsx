import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Upload from "./Pages/Upload";
import Images from "./Pages/Images";

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/images" element={<Images />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
