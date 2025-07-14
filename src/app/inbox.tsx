import React from 'react';
import EmptyState from './EmptyState';
import { key, inject, provide } from './piqure';

export class OutsideForTest {
    private _hasMail = false;

    hasMail() {
        return this._hasMail;
    }

    feedHasMail(hasMail: boolean) {
        this._hasMail = hasMail;
    }
}

export const KEY_OUTSIDE = key<OutsideForTest>('outside');

export const Inbox = () => {
    const outside = inject(KEY_OUTSIDE);
    return (
        <div data-testid="inbox">
            {!outside.hasMail() && <EmptyState/>}
        </div>
    );
};