import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TagContainer = styled.li`
  list-style: none;
  background: slateblue;
  padding: 5px;
  margin-right: 10px;
  border-radius: 20%;
`;

export function Tag(props) {
  const { tag } = props;
  return <TagContainer>{tag}</TagContainer>;
}

Tag.propTypes = {
  tag: PropTypes.string
};

export default Tag;
