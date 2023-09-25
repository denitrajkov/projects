import React from 'react';

interface Place {
    id: number;
    place: string;
    desc: string;
    img: string;
  }
const Place: React.FC<Place> = ({ desc, place, img, id }) => {
  return (
    <div className='ImageContainer' key={id}>
      <img src={img} alt='' />
      <div className='Overlay'></div>
      <div className='TextOverlay'>
        <p className='title'>{place}</p>
        <p className='text'>{desc}</p>
      </div>
    </div>
  );
};

export default Place;