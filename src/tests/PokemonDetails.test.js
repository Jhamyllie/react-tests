import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../RenderWithRouter';
import App from '../App';

describe('Aplique os teste necessários ao  PokemonDetails', () => {
  test('A página deve conter um texto <name> Details', () => {
    renderWithRouter(<App />);
    const link = screen.getByRole('link', { name: /more details/i });
    userEvent.click(link);
    const nomeDoPokemon = screen.getByRole('heading', { name: /pikachu details/i });
    expect(nomeDoPokemon).not.toBeInTheDocument();
  });
});
