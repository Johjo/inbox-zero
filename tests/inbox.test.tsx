/**
 * @vitest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import {describe, expect, test } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { Inbox, OutsideForTest, KEY_OUTSIDE } from '../src/app/inbox';
import { provide } from '../src/app/piqure';

describe('Inbox', () => {
  test('Inbox displays empty state', () => {
    const outside = new OutsideForTest();
    outside.feedHasMail(false);
    provide(KEY_OUTSIDE, outside);
    const {queryByTestId} = render(<Inbox />);
    expect(queryByTestId('empty-state')).toBeInTheDocument();
  });

  test('Inbox does not display empty state when mail are present', () => {
    const outside = new OutsideForTest();
    outside.feedHasMail(true);
    provide(KEY_OUTSIDE, outside);
    const {queryByTestId} = render(<Inbox />);
    expect(queryByTestId('empty-state')).not.toBeInTheDocument();
  });
});