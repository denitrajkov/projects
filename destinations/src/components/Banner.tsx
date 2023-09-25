import React from 'react';

interface TextBannerProps {
  text: string;
  title: string;
  button: string;
}

const TextBanner: React.FC<TextBannerProps> = ({ text, title, button }) => {
  return (
    <div className='Banner'>
      <div className='BannerText'>
        <p>{text}</p>
        <h1>{title}</h1>
        <button>{button}</button>
      </div>
    </div>
  );
};

const Banner: React.FC = () => {
  return (
    <>
      <TextBanner text='summer vacation' title='Nomad nation' button='read more' />
    </>
  );
};

export default Banner;
