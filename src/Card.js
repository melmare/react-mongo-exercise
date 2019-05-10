import React from 'react';

export default function Card(props) {
  const { card } = props;
  return <li>{card.title}</li>;
}
