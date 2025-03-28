import React, { useState } from 'react';
import arrowImage from '../../assets/img/Vector.png';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        {title}
        <img
          src={arrowImage}
          alt="Arrow"
          className={`arrow ${isOpen ? 'open' : ''}`}
        />
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
};

export default Collapse;