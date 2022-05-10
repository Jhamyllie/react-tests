import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../RenderWithRouter';
// import { NotFound } from '../components';

describe('Teste se o topo da aplicação contém um conjunto fixo de links de navegação',
  () => {
    test('O primeiro link deve possuir o texto Home', () => {
      renderWithRouter(<App />);
      const link = screen.getByText('Home');
      expect(link).toBeInTheDocument();
    });
    test('O segundo link deve possuir o texto About', () => {
      renderWithRouter(<App />);
      const link = screen.getByText('About');
      expect(link).toBeInTheDocument();
    });
    test('O terceiro link deve possuir o texto Favorite Pokémons.', () => {
      renderWithRouter(<App />);
      const link = screen.getByText('Favorite Pokémons');
      expect(link).toBeInTheDocument();
    });
    test(
      'Aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home',
      // O lint me fez reduzir a frase :(
      () => {
        const { history } = renderWithRouter(<App />);
        const homeLink = screen.getByRole('link', { name: 'Home' });
        userEvent.click(homeLink);
        expect(history.location.pathname).toBe('/');
      },
    );
    test(
      'Aplicação é redirecionada para a página About, na URL/about ao clicar em About',
      // seria "página de about", mas o lint me boicotou de novo
      () => {
        const { history } = renderWithRouter(<App />);
        const link = screen.getByText('About');
        userEvent.click(link);
        expect(history.location.pathname).toBe('/about');
      },
    );
    test(
      'Aplicação é redirecionada para a página de Pokémons Favoritados',
      //   na URL /favorites,ao clicar, em Favorite Pokémons',
      () => {
        const { history } = renderWithRouter(<App />);
        const link = screen.getByText('Favorite Pokémons');
        userEvent.click(link);
        expect(history.location.pathname).toBe('/favorites');
      },
    );
    test('Entrar em uma URL desconhecida, leva a uma página Not Found.', () => {
      // usar o history.push();
      const { history } = renderWithRouter(<App />);
      history.push('/NotFound');
      // const pD = screen.getByRole('heading', { name: 'Page requested not found' });
      const pD = screen.getByText('Page requested not found');
      expect(pD).toBeInTheDocument();
    });
  });

// history.push('/pagina/que-nao-existe/');

//     const notFoundTitle = screen.getByRole('heading',
//       { name: 'Page requested not found' });
//     expect(notFoundTitle).toBeInTheDocument();
//   });
