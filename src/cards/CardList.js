import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const CardListCointainer = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export default function CardList({ cards, onToggleBookmark }) {
  return (
    <CardListCointainer>
      {cards.map(card => (
        <Card onToggleBookmark={() => onToggleBookmark(card)} {...card} />
      ))}
    </CardListCointainer>
  );
}
