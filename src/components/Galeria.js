import "../assets/css/galeria.css";
import Heart from "./Heart";

import { useContext } from 'react';
import MyContext from "../my_context";

export default function Galeria() {

  const { fotos, setFotos } = useContext(MyContext)

  const setFavorito = (id) => {
    const fotoIndex = fotos.findIndex((f) => f.id === id)
    fotos[fotoIndex].favorito = !fotos[fotoIndex].favorito
    
    setFotos([...fotos])
  }

  return (
    <div className="galeria grid-columns-5 p-3">
      {
        fotos.map( (foto, i) => (
          <div 
          onClick={() => setFavorito(foto.id)}
          className="foto"
          style={{ backgroundImage: `url(${foto.src})` }}
          key={i}
          >
            <Heart filled={foto.favorito} />
            <p> {foto.descripcion}</p>
          </div>
        ))
      }
    </div>
  );
}
