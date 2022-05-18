import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../RenderWithRouter';
import App from '../App';

describe('Aplique os testes necessários ao componente Pokedex', () => {
  // test('A página contém um heading h2 com o texto Encountered pokémons', () => {
  //   renderWithRouter(<App />);
  //   const pagina = screen.getByRole('heading', { name: /Encountered pokémons/i });
  //   expect(pagina).toBeInTheDocument();
  // });

  test('Teste se é exibido o próximo pokémon da lista quando '
  + 'o botão Próximo pokémon é clicado', () => {
    renderWithRouter(<App />);
    const botaoProximo = screen.getByRole('button', { name: /Próximo pokémon/i });
    expect(botaoProximo).toBeInTheDocument();
    userEvent.click(botaoProximo);
  });

  test('Mostre os pokemons da lista', () => {
    renderWithRouter(<App />);
    const botaoId = screen.getAllByTestId('pokemon-type-button');
    expect(botaoId[0]).toBeInTheDocument();
    const botaoAll = screen.getByRole('button', { name: 'All' });
    expect(botaoAll).toHaveTextContent('All');
  });

  test('Teste o tipo do pekémon', () => {
    renderWithRouter(<App />);
    const botaoEletric = screen.getByRole('button', { name: /Electric/i });
    expect(botaoEletric).toBeInTheDocument();
    userEvent.click(botaoEletric);
  });

  test('Teste se a Pokédex tem os botões de filtro.', () => {
    renderWithRouter(<App />);
    const botaoFilter = screen.getByRole('button', { name: /all/i });
    expect(botaoFilter).toBeInTheDocument();
    userEvent.click(botaoFilter);
  });
});

//  dataTestId={`pokemon-type-button`}
//  onClick={() => this.filterPokemons('all')}
// {`${type}`}
