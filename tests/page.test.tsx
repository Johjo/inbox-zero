/**
 * @vitest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Home from '../src/app/page';
import '@testing-library/jest-dom/vitest';

test('Page', () => {
  render(<Home />);
  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});
