import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import DogBreedImages from './components/DogBreedImages'
import DogBreedImagesContainer from './components/DogBreedsImageContainer'
import DogsListContainer from './components/DogsListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <main>
          <Route exact path='/' component={DogsListContainer}/>
          <Route exact path='/dog-breeds/:breed' component={DogBreedImagesContainer}/>
        </main>
      </div>
    );
  }
}

export default App;
