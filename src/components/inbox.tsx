import React from 'react';
import EmptyState from '@/app/EmptyState';
import {inject, key} from '@/app/piqure';
import {Mail, MailView} from '@/app/Mail';
import {match} from 'ts-pattern';
import {ConnectionProperties, ImapAuthentication} from "@/components/ImapAuthentication";

type InboxViewEmpty = { status: 'empty'; };
type InboxViewMail = { status: 'success'; mail: MailView};
type InboxViewImapAuthentication = { status: 'imap-identification' };
export type InboxView = InboxViewEmpty | InboxViewMail | InboxViewImapAuthentication;

interface InboxOutside {
    view(): InboxView;
    on_connexion_click(props: ConnectionProperties): void;
}

type History = {name: "on_connexion_click"} & ConnectionProperties;


export class OutsideForTest implements InboxOutside {
    private _view: InboxView = {status: 'empty'};
    private _history: History[] = [];

    feedView(view: InboxView) {
        this._view = view;
    }

    view() {
        return this._view;
    }

    history() : History[] {
        return this._history;
    }

    on_connexion_click(props: ConnectionProperties) {
        this._history.push({name: 'on_connexion_click', ...props});
    }
}

export const KEY_OUTSIDE = key<InboxOutside>('outside');

export const Inbox = () => {
    const outside = inject(KEY_OUTSIDE);
    return (
        <div data-testid="inbox">
            {match(outside.view())
                .with({ status: 'empty' }, () => <EmptyState />)
                .with({ status: 'success' }, (view) => <Mail view={view.mail} />)
                .with({ status: 'imap-identification' }, () => <ImapAuthentication on_connexion_click={(props) => outside.on_connexion_click(props)}/>)
                .exhaustive()}
        </div>
    );
};