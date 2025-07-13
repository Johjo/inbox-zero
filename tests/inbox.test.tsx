/**
 * @vitest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Inbox from '../src/app/inbox';
import { expect, test } from 'vitest';
import '@testing-library/jest-dom/vitest';

test('Inbox', () => {
  render(<Inbox />);
  expect(screen.getByText("Vous n'avez aucun email")).toBeInTheDocument();
});
