import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";

const Home = ({ logements }) => {
  const navigate = useNavigate(); 

  return (
    <div className="home">
      <Banner
        image="/src/assets/img/background-home-page-kasa.jpg"
        title="Chez vous, partout et ailleurs"
        variant="variant1"
      />
      
      <div className="container-cards">
        {logements.map((logement) => (
          <div 
            key={logement.id} 
            onClick={() => navigate(`/logements/${logement.id}`)} 
            className="card-link"
          >
            <Card title={logement.title} cover={logement.cover} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
