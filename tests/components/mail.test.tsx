/**
 * @vitest-environment jsdom
 */
import React from 'react';
import {render} from '@testing-library/react';
import {describe, expect, test} from 'vitest';
import '@testing-library/jest-dom/vitest';
import {Mail} from '@/components/Mail';

describe('Mail', () => {
    test('it should display the subject', () => {
        const subject = 'Ceci est un sujet de test';
        const view = {subject, body: ''};
        const {getByText} = render(<Mail view={view}/>);
        expect(getByText(subject)).toBeInTheDocument();
    });

    test('it should display the body', () => {
        const body = 'Ceci est un corps de test';
        const view = {subject: '', body};
        const {getByText} = render(<Mail   view={view}/>);
        expect(getByText(body)).toBeInTheDocument();
    });
});
