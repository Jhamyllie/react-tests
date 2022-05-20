import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../RenderWithRouter';
import App from '../App';

describe('Aplique os teste necessários ao  PokemonDetails', () => {
  test('Não deve existir o link de navegação '
  + 'para os detalhes do pokémon selecionado', () => {
    renderWithRouter(<App />);

    const link = screen.getByRole('link', { name: /more details/i });

    userEvent.click(link);

    const nomeDoPokemon = screen.getByRole('heading', { name: /pikachu details/i });

    expect(nomeDoPokemon).toBeInTheDocument();
  });

  test('A seção de detalhes deve conter um heading h2 com o texto Summary', () => {
    renderWithRouter(<App />);

    const link = screen.getByRole('link', { name: /more details/i });

    userEvent.click(link);

    const sumary = screen.getByRole('heading', { level: 2, name: 'Summary' });

    expect(sumary).toBeInTheDocument();
  });

  test('A seção de detalhes deve conter um parágrafo com o resumo do pokémon'
  + 'especificado sendo visualizado', () => {
    renderWithRouter(<App />);

    const link = screen.getByRole('link', { name: /more details/i });

    userEvent.click(link);

    const pokemonFavorito = screen.getByText(/pokémon favoritado\?/i);

    const pokemonResumo = screen
      .getByText(/this intelligent pokémon roasts hard berries with electricity/i);

    expect(pokemonFavorito).toBeInTheDocument();

    expect(pokemonResumo).toBeInTheDocument();
  });

  test('Na seção de detalhes deverá existir um heading'
  + ' h2 com o texto Game Locations of <name>', () => {
    renderWithRouter(<App />);
    const link = screen.getByRole('link', { name: /more details/i });
    userEvent.click(link);
    // const name = pikachu;
    const detalhes = screen.getByRole('heading',
      { name: /game locations of pikachu/i });
    expect(detalhes).toBeInTheDocument();
  });

  test('Devem ser exibidos o nome da localização e uma imagem'
  + 'do mapa em cada localização', () => {
    renderWithRouter(<App />);

    const link = screen.getByRole('link', { name: /more details/i });
    userEvent.click(link);

    const imgLocalizacao = screen.getAllByAltText(/Pikachu location/i);
    expect(imgLocalizacao[0]).toHaveAttribute('src',
      'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');

    expect(imgLocalizacao[1]).toHaveAttribute('src',
      'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });
});

// <h2>{ `Game Locations of ${name}` }</h2>
//  <h2>{ `Summary` }</h2> feito
// <img src={ `${map}` } alt={ `${name} location` } />
// { `Pokémon favoritado?` }
// <p>{ `${summary}` }</p>
