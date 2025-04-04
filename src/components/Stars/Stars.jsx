import React from 'react'
import fullStar from "../../assets/img/star-active.png";
import emptyStar from "../../assets/img/star-empty.png";

const Stars = ({stars}) => {
    const maxStars = 5;

    return (
        <div className="stars">
            {[...Array(maxStars)].map((_, index) => (
                <img
                  key={index}
                  src={index < stars ? fullStar : emptyStar}
                  alt={index < stars ? "Étoile pleine" : "Étoile vide"}
                 className="star"
            />
        ))}
        </div>
    )
}

export default Stars