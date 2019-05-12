import React, { Component } from 'react';
import { getCardList, postCard, getLocal, setLocal } from './services';
import { CardList } from './CardList';
import Form from './Form';

export default class App extends Component {
  state = {
    cards: getLocal('cards') || []
  };

  componentDidMount() {
    getCardList()
      .then(data => this.setState({ cards: data }))
      .catch(error => console.log(error));
  }

  createCard(newCard) {
    postCard(newCard)
      .then(newCard =>
        this.setState({ cards: [newCard, ...this.state.cards] }, () =>
          setLocal('cards', this.state.cards)
        )
      )
      .catch(error => console.log(error));
  }

  render() {
    const { cards } = this.state;

    return (
      <main>
        <h1>Cards</h1>
        <Form onSubmit={newCard => this.createCard(newCard)} />
        <CardList cards={cards} />
      </main>
    );
  }
}
