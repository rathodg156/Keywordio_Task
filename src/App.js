import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import CreateAd from "./Components/CreateAd";
// import AdsTable from "./components/AdsTable";
// import AdsInsights from "./components/AdsInsights";
import TextAdForm from "./Form/TextAdForm";
import MediaAdForm from "./Form/MediaAdForm";
import SubmitForm from "./Components/SubmitForm";
import NavBar from "./Appbar/NavBar";
function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/create-ad" element={<CreateAd/>} />
        <Route path="/fill-text-ad" element={<TextAdForm/>} />
        <Route path="/fill-media-ad" element={<MediaAdForm/>} />
        <Route path="/submit-form" element={<SubmitForm/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
