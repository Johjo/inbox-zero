/**
 * @vitest-environment jsdom
 */
import React from 'react';
import {render} from '@testing-library/react';
import {describe, expect, test} from 'vitest';
import '@testing-library/jest-dom/vitest';
import {ImapAuthentication} from "@/components/ImapAuthentication";

describe('ImapAuthentication', () => {
    test('it should display fields', () => {
        const {getByTestId} = render(<ImapAuthentication/>);
        expect(getByTestId("imap-server")).toBeInTheDocument();
        expect(getByTestId("imap-port")).toBeInTheDocument();
        expect(getByTestId("imap-username")).toBeInTheDocument();
        expect(getByTestId("imap-password")).toBeInTheDocument();
        expect(getByTestId("imap-connect")).toBeInTheDocument();
    });
});
