import React from 'react';
import { Tag } from './Tag';
import styled from 'styled-components';

const CardTitle = styled.h2``;
const CardDescription = styled.p``;
const TagContainer = styled.ul``;
const BookmarkButton = styled.button``;
const CardContainer = styled.li``;
export default function Card(props) {
  const { card, onToggleBookmark } = props;

  return (
    <CardContainer>
      <CardTitle>{card.title}</CardTitle>
      <CardDescription> {card.description}</CardDescription>
      <TagContainer>
        {card.tags.map(tag => (
          <Tag key={tag} tag={tag} />
        ))}
      </TagContainer>
      <BookmarkButton onClick={onToggleBookmark}>
        {card.isBookmarked ? 'Bookmarked' : 'Bookmark'}
      </BookmarkButton>
    </CardContainer>
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
  }
  {card.tags.map(tag => (
          <Tag key={tag} tag={tag} />
        ))}
  
  
  
  
  */
