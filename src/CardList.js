import React from 'react';
import Card from './Card';

export function CardList(props, onToggleBookmark) {
  const { cards } = props;
  return (
    <ul>
      {cards.map(card => (
        <Card key={card._id} card={card} onToggleBookmark={onToggleBookmark} />
      ))}
    </ul>
  );
}
