/**
 * @vitest-environment jsdom
 */
import {fireEvent, render} from '@testing-library/react';
import {beforeEach, describe, expect, test} from 'vitest';
import '@testing-library/jest-dom/vitest';
import {provide} from '@/app/piqure';
import {Inbox, KEY_OUTSIDE, OutsideForTest} from "@/components/inbox";

describe('Inbox', () => {
  let outside: OutsideForTest;

  beforeEach(() => {
    outside = new OutsideForTest();
    provide(KEY_OUTSIDE, outside);
  });

  describe('Empty state', () => {
    test('Inbox displays empty state', () => {
      outside.feedView({status: 'empty'})
      const {queryByTestId} = render(<Inbox />);
      expect(queryByTestId('empty-state')).toBeInTheDocument();
    });

    test('Inbox does not display empty state when mail are present', () => {
      outside.feedView({status: 'success', mail: {subject: 'test', body: 'test'}})
      const {queryByTestId} = render(<Inbox />);
      expect(queryByTestId('empty-state')).not.toBeInTheDocument();
    });
  });

  describe('First mail', () => {
    test('it should display the mail component when mail is present', () => {
      outside.feedView({status: 'success', mail: {subject: 'test', body: 'test'}})
      const {queryByTestId} = render(<Inbox />);
      expect(queryByTestId('mail')).toBeInTheDocument();
    });
  });

  describe('Identification', () => {
    test('should display identification', () => {
      outside.feedView({status: 'imap-identification'})
      const {queryByTestId} = render(<Inbox />);
      expect(queryByTestId('imap-identification')).toBeInTheDocument();
    });

    test('should capture on click event', () => {
      outside.feedView({status: 'imap-identification'})
      const {getByTestId} = render(<Inbox />);
      const connectButton = getByTestId('imap-connect');

      fireEvent.click(connectButton);

      expect(outside.history()).toEqual([{name: 'on_connexion_click'}]);
    });
  });

});