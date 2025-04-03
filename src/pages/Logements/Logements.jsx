import React from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import logementsData from "../../data/data.json";
import Carrousel from "../../components/Carrousel/Carrousel";
import { useEffect } from "react";

const Logements = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 

  console.log("ID récupéré depuis l'URL:", id);

  const logement = logementsData.find((logement) => logement.id === id);
  console.log("Logement trouvé:", logement);

  useEffect(() => {
    if (!logement) {
      navigate("/*"); 
    }
  }, [logement, navigate]);

  if (!logement) {
    return null; 
  }

  return (
    <div className="logements">
      <Carrousel pictures={logement.pictures} />
      <h1>{logement.title}</h1>
      <p>{logement.description}</p>
      {/* Autres informations ici */}
    </div>
  );
};

export default Logements;
