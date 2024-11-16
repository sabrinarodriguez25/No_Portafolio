import React from "react";
import '../styles/Seccion1.css';  // Asegúrate de que la ruta esté correcta
import imgSrc from '../img/descarga-removebg-preview.png';
import imgAnnabel2 from '../img/annabel.jpg';  // Ruta de la segunda imagen

const Seccion1 = () => {
  return (
    <div className="image-container">
      {/* Imagen principal con los títulos animados */}
      <div className="image-wrapper">
        <img 
          src={imgSrc} 
          alt="Imagen principal"
        />
        <div className="image-title image-title-annabel">Annabel</div>
        <div className="image-title image-title-lucinda">Lucinda</div>
      </div>

      {/* Segunda sección con imagen y descripción */}
      <div className="image-description-container">
        <img 
          src={imgAnnabel2} 
          alt="Imagen de Annabel 2" 
          className="image-annabel2"
        />
        <div className="description">
          <h2>Descripción de Annabel</h2>
          <p>
            Esta es una descripción sobre Annabel, explicando más sobre su historia, logros, y otros detalles interesantes. Puede ser una biografía corta o cualquier información relevante.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Seccion1;
