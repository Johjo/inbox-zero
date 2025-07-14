import React from 'react';
import { Inbox } from './inbox';
import { provide } from './piqure';
import { KEY_OUTSIDE, OutsideForTest } from './inbox';

provide(KEY_OUTSIDE, new OutsideForTest());

export default function Home() {
  return (
    <main>
      <Inbox />
    </main>
  );
}
