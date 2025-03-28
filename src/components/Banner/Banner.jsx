import React from 'react';

const Banner = ({ image, title, variant }) => {
  const bannerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.76), rgba(0, 0, 0, 0.6)), url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className={`banner ${variant}`} style={bannerStyle}>
      {title && <h1>{title}</h1>}
    </div>
  );
};

export default Banner;