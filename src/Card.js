import React from 'react';
import { Tag } from './Tag';

export default function Card(props) {
  const { card } = props;
  return (
    <li>
      <h2>{card.title}</h2>
      <p> {card.description}</p>
      <ul>
        {card.tags.map(tag => (
          <Tag tag={tag} />
        ))}
      </ul>
    </li>
  );
}
