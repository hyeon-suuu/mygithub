import { render, screen } from '@testing-library/react';
import App from './App';

test('renders 슈킹 쇼핑몰 header', () => {
  render(<App />);
  const headerElement = screen.getByText(/슈킹 쇼핑몰/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders 신발 상품 목록 description', () => {
  render(<App />);
  const descriptionElement = screen.getByText(/신발 상품 목록/i);
  expect(descriptionElement).toBeInTheDocument();
});

test('renders correct number of ProductCard components', () => {
  render(<App />);
  const productCards = screen.getAllByRole('img');
  expect(productCards.length).toBe(6);
});

