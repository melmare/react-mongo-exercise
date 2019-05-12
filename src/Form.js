import React, { Component } from 'react';
import { Input } from './Input';

export default class Form extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    const tags = event.target.tags.value.split(',');

    const newCard = { title, description, tags };
    this.props.onSubmit(newCard);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input name="title" type="text" />
        <Input name="description" type="text" />
        <Input name="tags" type="text" />
        <button>Submit new Card</button>
      </form>
    );
  }
}

/*.then(data =>
this.setState(
    { title: data.title },
    { description: data.description },
    { tags: data.tags }
  )
)
  handleSubmit = event => {
    event.preventDefault();



    ---



 state = {
   title: '',
    description: '',
    tags: ''
  };

  handleTitleChange = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleDescriptionChange = event => {
    this.setState({
      description: event.target.value
    });
  };

  handleTagsChange = event => {
    this.setState({
      tags: event.target.value.split(',')
    });
  };






*/
