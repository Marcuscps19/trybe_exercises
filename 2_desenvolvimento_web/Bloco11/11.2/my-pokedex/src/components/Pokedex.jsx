import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      filteredType: 'All',
    };
  }

  nextPokemon(pokemonListLength) {
    this.setState((state) => ({
      index: (state.index + 1) % pokemonListLength,
    }));
  }

  previousPokemon(pokemonListLength) {
    this.setState((state) => ({
      index: state.index === 0 ? pokemonListLength - 1 : state.index - 1,
    }));
  }

  setType(type) {
    this.setState(() => ({
      index: 0,
      filteredType: type,
    }));
  }

  fetchPokemonsByType() {
    if (this.state.filteredType === 'All') {
      return this.props.pokemons;
    }
    return this.props.pokemons.filter(
      (pokemon) => pokemon.type === this.state.filteredType
    );
  }

  render() {
    const selectedPokemons = this.fetchPokemonsByType();

    return (
      <div className='pokedex'>
        <div>
          <Pokemon pokemon={selectedPokemons[this.state.index]}></Pokemon>
        </div>
        <div className='pokedex'>
          <button
            onClick={this.previousPokemon.bind(this, selectedPokemons.length)}
          >
            Previous
          </button>
          <button
            onClick={this.nextPokemon.bind(this, selectedPokemons.length)}
          >
            Next
          </button>

          <button onClick={this.setType.bind(this, 'Bug')}>Bug</button>
          <button onClick={this.setType.bind(this, 'Dragon')}>Dragon</button>
          <button onClick={this.setType.bind(this, 'Electric')}>Electric</button>
          <button onClick={this.setType.bind(this, 'Fire')}>Fire</button>
          <button onClick={this.setType.bind(this, 'Grass')}>Grass</button>
          <button onClick={this.setType.bind(this, 'Normal')}>Normal</button>
          <button onClick={this.setType.bind(this, 'Psychic')}>Psychic</button>
          <button onClick={this.setType.bind(this, 'All')}>All</button>
        </div>
      </div>
    );
  }
}

export default Pokedex;
