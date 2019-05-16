import React from 'react';
import Card from './Card';
import styled from 'styled-components';
import Headline from '../components/Headline';

const CardListCointainer = styled.ul``;

export default function CardList(props) {
  const { cards, onToggleBookmark } = props;
  return (
    <CardListCointainer>
      {cards.map(card => (
        <Card
          key={card._id}
          card={card}
          onToggleBookmark={() => onToggleBookmark(card)}
        />
      ))}
    </CardListCointainer>
  );
}
