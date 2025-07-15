import React from 'react';

export type MailView = { subject: string; body: string };

type MailProps = {
    view: MailView;
}

export const Mail = ({view}: MailProps) => {
    return (
        <div data-testid="mail">
            <h1>{view.subject}</h1>
            <p>{view.body}</p>
        </div>
    );
};
