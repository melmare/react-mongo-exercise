import React from 'react';
import Form from './Form';
import Headline from '../components/Headline';
import styled from 'styled-components';

const CreatePageContainer = styled.div`
  grid-area: Content;
`;
export function CreatePage(props) {
  return (
    <CreatePageContainer>
      <Headline>Create Card</Headline>
      <Form
        onSubmit={card => this.createCard(card, props.history)}
        {...props}
      />
    </CreatePageContainer>
  );
}
