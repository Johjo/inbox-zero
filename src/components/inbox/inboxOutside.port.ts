import {ConnectionProperties} from "@/components/ImapAuthentication";
import {MailView} from "@/components/Mail";
import {key} from "@/app/piqure";

type InboxViewEmpty = { status: 'empty'; };
type InboxViewMail = { status: 'success'; mail: MailView};
type InboxViewImapAuthentication = { status: 'imap-identification' };
export type InboxView = InboxViewEmpty | InboxViewMail | InboxViewImapAuthentication;


export interface InboxOutsidePort {
    view(): InboxView;

    on_connexion_click(props: ConnectionProperties): void;
}

export const KEY_OUTSIDE = key<InboxOutsidePort>('outside');