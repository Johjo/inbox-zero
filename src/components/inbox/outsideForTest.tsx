import {ConnectionProperties} from "@/components/ImapAuthentication";
import {InboxView} from "@/components/inbox/inbox";
import {InboxOutsidePort} from "@/components/inbox/inboxOutside.port";

type History = {name: "on_connexion_click"} & ConnectionProperties;

export class OutsideForTest implements InboxOutsidePort {
    private _view: InboxView = {status: 'empty'};
    private _history: History[] = [];

    feedView(view: InboxView) {
        this._view = view;
    }

    view() {
        return this._view;
    }

    history(): History[] {
        return this._history;
    }

    on_connexion_click(props: ConnectionProperties) {
        this._history.push({name: 'on_connexion_click', ...props});
    }
}