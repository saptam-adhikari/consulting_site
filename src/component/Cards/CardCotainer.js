import React from 'react';
import Card from './Card';
import './Card.css';


const cards = [
  {
    image: 'https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/06/h1-6.webp',
    title: 'Main Consulting Homepage',
  },
  {
    image: 'https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/h4-1.webp',
    title: 'Consulting Homepage',
  },
  {
    image: 'https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/06/h1-8.webp',
    title: 'IT Solutiions Homepage',
  },
  {
    image: 'https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/06/h1-7.webp',
    title: 'Marketing Consulting Homepagev',
  },
];

const CardContainer = () => {
  return (
    <div className='card-container'>
      {cards.map((card, index) => (
        <Card key={index} image={card.image} title={card.title}/>
      ))}
    </div>
  );
};

export default CardContainer;
