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
  describe('Empty state', () => {
    test('Inbox displays empty state', () => {
      const outside = new OutsideForTest();
      outside.feedView({status: 'empty'})
      provide(KEY_OUTSIDE, outside);
      const {queryByTestId} = render(<Inbox />);
      expect(queryByTestId('empty-state')).toBeInTheDocument();
    });

    test('Inbox does not display empty state when mail are present', () => {
      const outside = new OutsideForTest();
      outside.feedView({status: 'success', mail: {subject: 'test', body: 'test'}})
      provide(KEY_OUTSIDE, outside);
      const {queryByTestId} = render(<Inbox />);
      expect(queryByTestId('empty-state')).not.toBeInTheDocument();
    });
  });

  describe('First mail', () => {
    test('it should display the mail component when mail is present', () => {
      const outside = new OutsideForTest();
      outside.feedView({status: 'success', mail: {subject: 'test', body: 'test'}})
      provide(KEY_OUTSIDE, outside);
      const {queryByTestId} = render(<Inbox />);
      expect(queryByTestId('mail')).toBeInTheDocument();
    });
  });
});