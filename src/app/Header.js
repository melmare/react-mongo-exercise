import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navigation = styled.nav`
  background: skyblue;
  grid-area: 'Navigation';
`;

export function Header() {
  return (
    <Navigation>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/create">
        Create
      </NavLink>
    </Navigation>
  );
}
