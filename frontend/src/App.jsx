// import { useState } from 'react'
import NavBar from "./components/NavBar";
import {  Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import Category from "./pages/Category";
import AdminPage from "./pages/AdminPages.jsx/AdminPage";
import CreateNewAnimal from "./pages/AdminPages.jsx/CreateNewAnimal";
import EditAnimal from "./pages/AdminPages.jsx/EditAnimal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="birds" element={<Category type="birds" />} />
          <Route path="dog" element={<Category type="dogs" />} />
          <Route path="cats" element={<Category type="cats" />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/create" element={<CreateNewAnimal />} />
          <Route path="/admin/edit/:id" element={<EditAnimal />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
