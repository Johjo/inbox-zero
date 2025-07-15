import React from 'react';
import EmptyState from './EmptyState';
import { key, inject } from './piqure';
import { Mail } from './Mail';

type InboxViewEmpty = { status: 'empty'; };
type InboxViewMail = { status: 'success'; };
type InboxView = InboxViewEmpty | InboxViewMail;

export class OutsideForTest {
    private _view: InboxView = {status: 'empty'};

    feedView(view: InboxView) {
        this._view = view;
    }

    view() {
        return this._view;
    }

}

export const KEY_OUTSIDE = key<OutsideForTest>('outside');

export const Inbox = () => {
    const outside = inject(KEY_OUTSIDE);
    return (
        <div data-testid="inbox">
            {outside.view().status == 'success' ? <Mail /> : <EmptyState/>}
        </div>
    );
};