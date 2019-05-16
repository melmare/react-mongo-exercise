import React from 'react';
import CardList from './CardList';
import Headline from '../components/Headline';

export function CardPage({ cards, onToggleBookmark }) {
  return (
    <>
      <Headline>Cards</Headline>
      <CardList onToggleBookmark={onToggleBookmark} cards={cards} />
    </>
  );
}
