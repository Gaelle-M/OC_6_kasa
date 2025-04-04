import React from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import logementsData from "../../data/data.json";
import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from '../../components/Collapse/Collapse';
import Tags from "../../components/Tags/Tags";
import Stars from "../../components/Stars/Stars";

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

    <div className="container-section1">
      <div className="container-title">
        <h1>{logement.title}</h1>
        <p>{logement.location}</p>
      </div>
      <div className="container-host">
        <p>{logement.host.name}</p>
        <img src={logement.host.picture} alt={logement.host.name} />
      </div>
      </div>

    <div className="container-section2">
      <div className="container-tags">
        {logement.tags.map((tag, index) => (
          <Tags key={index} name={tag} />
        ))}
      </div>

      <div className="container-stars">
      <Stars stars={parseInt(logement.rating)} />
      </div>
    </div>

      <div className="container-collapse">
        <Collapse
          title="Description"
          content={logement.description}
        />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((equipement, index) => (
                <li key={index}>{equipement}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default Logements;
