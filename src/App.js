import React, { Component } from 'react';
import {
  getCardList,
  postCard,
  getLocal,
  setLocal,
  patchCard
} from './services';
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

  updateCardInState = newCard => {
    const cards = this.state.cards.slice();
    const index = this.state.cards.findIndex(card => newCard._id === card._id);
    cards[index] = {
      ...newCard
    };
    this.setState({ cards });
  };

  handleToggleBookmark = card => {
    patchCard({ isBookmarked: !card.isBookmarked }, card._id)
      .then(this.updateCardInState)
      .catch(err => console.log(err));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cards !== this.state.cards) {
      setLocal('cards', this.state.cards);
    }
  }

  createCard = newCard => {
    postCard(newCard)
      .then(newCard => this.setState({ cards: [newCard, ...this.state.cards] }))
      .catch(error => console.log(error));
  };

  render() {
    const { cards } = this.state;

    return (
      <main>
        <h1>Cards</h1>
        <Form onSubmit={this.createCard} />
        <CardList cards={cards} onToggleBookmark={this.handleToggleBookmark} />
      </main>
    );
  }
}
