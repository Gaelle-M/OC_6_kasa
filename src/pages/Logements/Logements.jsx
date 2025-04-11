import React from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from '../../components/Collapse/Collapse';
import Tags from "../../components/Tags/Tags";
import Stars from "../../components/Stars/Stars";

const Logements = ({ logements }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const logement = logements.find((logement) => logement.id === id);

  useEffect(() => {
    if (!logement) {
      navigate("/*");
    }
  }, [logement, navigate]);

  if (!logement) return null;

  return (
    <div className="logements">
      <Carrousel pictures={logement.pictures} />

    <div className="container-left-and-right">
      <div className="container-left">
        <div className="container-title">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>

          <div className="container-tags">
           {logement.tags.map((tag, index) => (
           <Tags key={index} name={tag} />
         ))}
          </div>
       </div>
      </div>

      <div className="container-right">
        <div className="container-host">
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt={logement.host.name} />
        </div>

        <div className="container-stars">
        <Stars stars={parseInt(logement.rating)} />
        </div>
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
