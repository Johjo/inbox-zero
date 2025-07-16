import React from 'react';
import { Inbox } from '../components/inbox';
import { provide } from './piqure';
import { KEY_OUTSIDE, OutsideForTest } from '../components/inbox';

const outsideForTest = new OutsideForTest();
outsideForTest.feedView({status: 'imap-identification'});
provide(KEY_OUTSIDE, outsideForTest);

export default function Home() {
  return (
    <main>
      <Inbox />
    </main>
  );
}
