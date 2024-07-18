import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductList from './ProductList';

test('renders ProductList with correct number of ProductCard components', () => {
  render(<ProductList />);

  const productCards = screen.getAllByRole('img');
  expect(productCards.length).toBe(6);
});
