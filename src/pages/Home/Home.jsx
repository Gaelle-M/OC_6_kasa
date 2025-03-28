import React from "react";
import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";

const Home = ({ logements }) => { 

  return (
    <div className="home">

<Banner
  image="/src/assets/img/background-home-page-kasa.jpg"
  title="Chez vous, partout et ailleurs"
  variant="variant1"
/>
      
      <div className="container-cards">
        {logements.map((logement) => (
          <Card key={logement.id} title={logement.title} cover={logement.cover} />
        ))}
      </div>
    </div>
  );
};

export default Home;
