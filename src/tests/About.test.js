import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';

describe('Teste se o topo da aplicação contém um conjunto fixo de links de navegação',
  () => {
    test('O primeiro link deve possuir o texto Home', () => {
      renderWidthRouter(<App />);
      const link = screen.getByText('Home');
      expect(link).toBeInTheDocument();
    });
  });
