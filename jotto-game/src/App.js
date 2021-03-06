import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import GuessedWords from './components/GuessedWords/GuessedWords';
import Congrats from './components/Congrats/Congrats';
import Input from './components/Input/Input';

import { getSecretWord } from './store/actions';

export class UnconnectedApp extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <p>The secret word is {this.props.secretWord}</p>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    success: state.success,
    guessedWords: state.guessedWords,
    secretWord: state.secretWord
  };
};

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
