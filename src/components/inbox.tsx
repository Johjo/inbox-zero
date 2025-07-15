import React from 'react';
import EmptyState from '../app/EmptyState';
import {inject, key} from '../app/piqure';
import {Mail, MailView} from '../app/Mail';
import {match} from 'ts-pattern';
import {ImapAuthentication} from "@/components/ImapAuthentication";

type InboxViewEmpty = { status: 'empty'; };
type InboxViewMail = { status: 'success'; mail: MailView};
type InboxViewImapAuthentication = { status: 'imap-identification' };
type InboxView = InboxViewEmpty | InboxViewMail | InboxViewImapAuthentication;

interface InboxOutside {
    view(): InboxView;
}

export class OutsideForTest implements InboxOutside {
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
                .with({ status: 'imap-identification' }, () => <ImapAuthentication/>)
                .exhaustive()}
        </div>
    );
};