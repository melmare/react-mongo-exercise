import React from 'react';
import Card from './Card';

export function CardList(props) {
  const { cards } = props;
  return (
    <ul>
      {cards.map(card => (
        <Card card={card} />
      ))}
    </ul>
  );
}
