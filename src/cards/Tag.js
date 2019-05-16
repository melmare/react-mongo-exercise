import React from 'react';
import PropTypes from 'prop-types';

export function Tag(props) {
  const { tag } = props;
  return <li>{tag}</li>;
}

Tag.propTypes = {
  tag: PropTypes.string
};
