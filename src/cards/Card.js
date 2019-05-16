import React from 'react';
import { Tag } from './Tag';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardTitle = styled.h2``;
const CardDescription = styled.p``;
const TagContainer = styled.ul``;
const BookmarkButton = styled.button``;
const CardContainer = styled.li``;

export default function Card({
  title,
  description,
  tags,
  isBookmarked,
  onToggleBookmark
}) {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardDescription> {description}</CardDescription>
      <TagContainer>
        {tags && tags.map(tag => <Tag key={tag} tag={tag} />)}
      </TagContainer>
      <BookmarkButton onClick={onToggleBookmark}>
        {isBookmarked ? 'Bookmarked' : 'Bookmark'}
      </BookmarkButton>
    </CardContainer>
  );
}

Card.propType = {
  title: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.array,
  isBookmarked: PropTypes.bool
};

//    <p>{{ bookmarked } ? 'Bookmarked' : 'Bookmark'}</p>
/*




Card.defaultProps = {
  title: 'Steinalte',
  description: 'Fische',
  tags: ['wirklich', 'neue', 'fische'],
  isBookmarked: false
};






function patchCard(card) {
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
