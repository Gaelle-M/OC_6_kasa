import React, {useState} from 'react'
import flecheGauche from '../../assets/img/arrow-left-carrousel.png'; 
import flecheDroite from '../../assets/img/arrow-right-carrousel.png';


const Carrousel = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalImages = pictures.length;
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    };
  
    const goToPrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalImages - 1 : prevIndex - 1
      );
    };
  
    return (
      <div className="carrousel">
        <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carrousel-image" />
        
        {totalImages > 1 && (
          <>
            <button className="prev" onClick={goToPrev}>
            <img src={flecheGauche} alt="Précédent" />
        </button>
        <button className="next" onClick={goToNext}>
            <img src={flecheDroite} alt="Suivant" />
        </button>

            <div className="pagination">
              {currentIndex + 1}/{totalImages}
            </div>
          </>
        )}
      </div>
    );
  };
  
  export default Carrousel;
  