import "./styles.css";
import MyContext from "./my_context";
import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default function App() {
  const endpoint = "/fotos.json";


  const [fotos, setFotos] = useState([])
  const sharedState = { fotos, setFotos }

  const getFotos = async () => {
    const response = await fetch(endpoint)
    let { photos } = await response.json()
    photos = photos.map((photo) => ({
      id: photo.id,
      src: photo.src.tiny,
      descripcion: photo.alt,
      favorito: photo.liked
    }))
    setFotos(photos)

  }

  useEffect(() => {
    getFotos()
  }, [])

  // console.log(fotos)

  return (
    <div className="App">
      {}
      {}

      <MyContext.Provider value={sharedState}>
        <BrowserRouter>
          <Navbar />
          <Routes>      
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}
