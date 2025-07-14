import React from 'react';
import EmptyState from './EmptyState';

export class OutsideForTest {

}

interface InboxProps {
    outside?: OutsideForTest
}

export const Inbox = ({outside}: InboxProps) => {
    return (
        <div data-testid="inbox">
            {!outside._hasMail && <EmptyState/>}
        </div>
    );
};
