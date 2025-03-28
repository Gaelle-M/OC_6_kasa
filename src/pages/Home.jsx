import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Card from "../components/Card";
import logementsData from "../data/data.json";

const Home = () => {
  const [logements] = useState(logementsData);

  return (
    <div className="home">
      <Navigation />
      <div className="container-title">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>

      <div className="container-cards">
        {logements.map((logement) => (
          <Card key={logement.id} title={logement.title} cover={logement.cover} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
