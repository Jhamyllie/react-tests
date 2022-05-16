import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../RenderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';
// import App from '../App';

describe('Teste o componente <FavoritePokemons.js />', () => {
  test('É exibida na tela a mensagem No favorite pokemon found', () => {
    // se não houver pokémon favorito'
    renderWithRouter(<FavoritePokemons />);
    const naoFavoritei = screen.getByText('No favorite pokemon found');
    expect(naoFavoritei).toBeInTheDocument();
  });
  test('São exibidos todos os cards de pokémons favoritados.', () => {
    renderWithRouter(<FavoritePokemons />);
    // const pokemonName = moreDatails;
    // const pokemonFavoritados = screen.getByRole(pokemonName);
    // experct(pokemonFavoritados).toBeInTheDocument();
  });
});
