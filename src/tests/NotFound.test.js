import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import App from '../App';
import renderWithRouter from '../RenderWithRouter';
import { NotFound } from '../components';

describe('Aplique os testes necessários ao componente NotFound', () => {
  test('A página contém um heading h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);
    const pagina = screen.getByRole('heading', { name: /Page requested not found/ });
    expect(pagina).toBeInTheDocument();
  });
  test('Teste se a página mostra a imagem', () => {
    renderWithRouter(<NotFound />);
    const imagem = screen.getByRole(
      'img', { name: /pikachu crying because the page requested was not found/i },
    );
    expect(imagem).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
