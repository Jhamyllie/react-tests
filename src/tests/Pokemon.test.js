import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../RenderWithRouter';
import App from '../App';

describe('Teste o componente <Pokemons.js />', () => {
  test('O nome correto do pokémon deve ser mostrado na tela', () => {
    renderWithRouter(<App />);
    const cardPokemon = screen.getByText(/pikachu/i);
    expect(cardPokemon).toBeInTheDocument();
  });

  test('O tipo correto do pokémon deve ser mostrado na tela', () => {
    renderWithRouter(<App />);
    const typePokemon = screen.getByTestId('pokemon-type');
    expect(typePokemon).toHaveTextContent(/Electric/i);
  });

  test('O peso médio do pokémon deve ser exibido com um texto', () => {
    renderWithRouter(<App />);
    const pesoPokemon = screen.getByText(/average weight: 6\.0 kg/i);
    expect(pesoPokemon).toBeInTheDocument();
  });

  test('O card do pokémon indicado na Pokédex contém um link de navegação', () => {
    renderWithRouter(<App />);
    const link = screen.getByRole('link', { name: /more details/i });
    userEvent.click(link);
    const linkFavorito = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(linkFavorito);
    const estrela = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(estrela).toHaveAttribute('src', '/star-icon.svg');
    expect(estrela.alt).toContain('Pikachu is marked as favorite');
    const nameSprite = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(nameSprite).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });
});

// {showDetailsLink && <Link to={ `pokemons/${id}` }>More details</Link>}
// <img src={ `${image}` } alt={ `${name} sprite` } />
//  <img src={ `${image}` } alt={ `${name} sprite` } />
