import React from 'react';
import { Inbox } from '../components/inbox';
import { provide } from './piqure';
import { KEY_OUTSIDE, OutsideForTest } from '../components/inbox';

provide(KEY_OUTSIDE, new OutsideForTest());

export default function Home() {
  return (
    <main>
      <Inbox />
    </main>
  );
}
