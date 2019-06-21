import React from 'react';
import { Tag } from './Tag';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardContainer = styled.li`
  list-style: none;
  border: 3px solid;
  margin-bottom: 20px;
  padding: 10px;
`;
const CardTitle = styled.h2``;
const CardDescription = styled.p``;

const BookmarkButton = styled.button``;
const TagContainer = styled.ul`
  list-style: none;
  display: flex;
  padding-left: 0px;
`;

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
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array,
  isBookmarked: PropTypes.bool.isRequired
};

Card.defaultProps = {
  title: 'Steinalte',
  description: 'Fische',
  tags: ['wirklich', 'neue', 'fische'],
  isBookmarked: false
};
