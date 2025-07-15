import React from 'react';
import EmptyState from './EmptyState';
import {inject, key} from './piqure';
import {Mail, MailView} from './Mail';
import {match} from 'ts-pattern';

type InboxViewEmpty = { status: 'empty'; };
type InboxViewMail = { status: 'success'; mail: MailView};
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
            {match(outside.view())
                .with({ status: 'empty' }, () => <EmptyState />)
                .with({ status: 'success' }, (view) => <Mail view={view.mail} />)
                .exhaustive()}
        </div>
    );
};