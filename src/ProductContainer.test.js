import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductContainer from './ProductContainer';

test('renders ProductContainer with header and description', () => {
  render(<ProductContainer><div>Test Children</div></ProductContainer>);

  const headerElement = screen.getByText(/슈킹 쇼핑몰/i);
  const descriptionElement = screen.getByText(/신발 상품 목록/i);
  const childElement = screen.getByText(/Test Children/i);

  expect(headerElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  expect(childElement).toBeInTheDocument();
});
