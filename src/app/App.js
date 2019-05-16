import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  getCardList,
  postCard,
  getLocal,
  setLocal,
  patchCard
} from '../services';
import { CardPage } from '../cards/CardsPage';
import { CreatePage } from '../create/CreatePage';
import { Header } from './Header';
import GlobalStyles from '../components/GlobalStyles';
import styled from 'styled-components';

const Grid = styled.div``;

const Main = styled.main``;

export default class App extends Component {
  state = {
    cards: getLocal('cards') || []
  };

  createCard = (newCard, history) => {
    postCard(newCard)
      .then(newCard => {
        this.setState({ cards: [newCard, ...this.state.cards] });
        history.push('/');
      })
      .catch(error => console.log(error));
  };

  onToggleBookmark = card => {
    patchCard({ isBookmarked: !card.isBookmarked }, card._id)
      .then(this.updateCardInState)
      .catch(err => console.log(err));
  };

  updateCardInState = changedCard => {
    const { cards } = this.state;
    const index = cards.findIndex(card => card._id === changedCard._id);
    this.setState({
      cards: [...cards.slice(0, index), changedCard, ...cards.slice(index + 1)]
    });
  };

  componentDidMount() {
    getCardList()
      .then(data => this.setState({ cards: data }))
      .catch(error => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cards !== this.state.cards) {
      setLocal('cards', this.state.cards);
    }
  }
  render() {
    const { cards } = this.state;

    return (
      <Grid>
        <BrowserRouter>
          <GlobalStyles />
          <Header />
          <Main>
            <Switch>
              <Route
                path="/create"
                render={props => (
                  <CreatePage
                    onSubmit={card => this.createCard(card, props.history)}
                  />
                )}
              />
              <Route
                path="/"
                render={() => (
                  <CardPage
                    onToggleBookmark={this.onToggleBookmark}
                    cards={cards}
                  />
                )}
              />
            </Switch>
          </Main>
        </BrowserRouter>
      </Grid>
    );
  }
}

/*

 <Route
              path="/create"
              render={props => <Form onSubmit={(card) => this.createCard(card, props.history)} {...props} />}
            />

            */
