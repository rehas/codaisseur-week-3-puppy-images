import React, { PureComponent } from 'react';

import request from 'superagent';
import DogsList from './DogsList';

export default class DogsListContainer extends PureComponent {
  state = { dogBreeds: null }

  componentDidMount(){
    request
        .get('https://dog.ceo/api/breeds/list/all')
        .then(a=>  a)
        .then(x=>  x.body.message)
        .then(messages => this.updateBreeds(Object.keys(messages)))
        .then(console.log)
        .catch(console.error)
}
updateBreeds(breeds) {
    this.setState({
      dogBreeds: breeds
    })
  }

  render() {
    return <DogsList dogBreeds={this.state.dogBreeds} />
  }
}