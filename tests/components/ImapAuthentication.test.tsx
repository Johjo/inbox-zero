/**
 * @vitest-environment jsdom
 */
import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import {describe, expect, test, vi} from 'vitest';
import '@testing-library/jest-dom/vitest';
import {ImapAuthentication} from "@/components/ImapAuthentication";

describe('ImapAuthentication', () => {
    test('it should display fields', () => {
        const {getByTestId} = render(<ImapAuthentication on_connexion_click={() => {}}/>);
        expect(getByTestId("imap-server")).toBeInTheDocument();
        expect(getByTestId("imap-port")).toBeInTheDocument();
        expect(getByTestId("imap-username")).toBeInTheDocument();
        expect(getByTestId("imap-password")).toBeInTheDocument();
        expect(getByTestId("imap-connect")).toBeInTheDocument();
    });

    test('it should call on_connexion_click when connect button is clicked', () => {
        const on_connexion_click = vi.fn();
        const {getByTestId} = render(<ImapAuthentication on_connexion_click={on_connexion_click}/>);
        const connectButton = getByTestId("imap-connect");

        fireEvent.click(connectButton);

        expect(on_connexion_click).toHaveBeenCalled();
    });
});
