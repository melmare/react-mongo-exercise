import React from 'react';
import Card from './Card';
import styled from 'styled-components';
import Headline from '../components/Headline';

const CardListCointainer = styled.ul`
  padding-top: 50px;
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
