/**
 * @vitest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Inbox from '../src/app/inbox';
import {describe, expect, test } from 'vitest';
import '@testing-library/jest-dom/vitest';

describe('Inbox', () => {
  test('Inbox displays empty state', () => {
    const {getByTestId} = render(<Inbox />);
    expect(getByTestId('empty-state')).toBeInTheDocument();
  });


})

