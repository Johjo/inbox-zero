import React from 'react';
import EmptyState from '@/app/EmptyState';
import {inject} from '@/app/piqure';
import {Mail} from '@/components/Mail';
import {match} from 'ts-pattern';
import {ImapAuthentication} from "@/components/ImapAuthentication";
import {KEY_OUTSIDE} from "@/components/inbox/inboxOutside.port";


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