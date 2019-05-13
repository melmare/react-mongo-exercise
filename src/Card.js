import React from 'react';
import { Tag } from './Tag';

export default function Card(props, onToggleBookmark) {
  const { card } = props;

  return (
    <li>
      <h2>{card.title}</h2>
      <p> {card.description}</p>
      <ul>
        {card.tags.map(tag => (
          <Tag key={tag} tag={tag} />
        ))}
      </ul>
      <button onClick={() => onToggleBookmark(card)}>
        {card.isBookmarked ? 'Bookmarked' : 'Bookmark'}
      </button>
    </li>
  );
}

//    <p>{{ bookmarked } ? 'Bookmarked' : 'Bookmark'}</p>
/*function patchCard(card) {
    const {id} = req.params
    return fetch('/cards/:id'. {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(card.bookmarked)
    }).then(res => res.json())
  }*/
