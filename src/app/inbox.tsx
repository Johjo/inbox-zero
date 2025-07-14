import React from 'react';
import EmptyState from './EmptyState';
import { key, inject, provide } from './piqure';

export class OutsideForTest {
    _hasMail = false;
}

export const KEY_OUTSIDE = key<OutsideForTest>('outside');

provide(KEY_OUTSIDE, new OutsideForTest());

export const Inbox = () => {
    const outside = inject(KEY_OUTSIDE);
    return (
        <div data-testid="inbox">
            {!outside._hasMail && <EmptyState/>}
        </div>
    );
};