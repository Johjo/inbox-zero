import React from 'react';
import { Inbox } from '../components/inbox/inbox';
import { provide } from './piqure';
import {OutsideForTest} from "@/components/inbox/outsideForTest";
import {KEY_OUTSIDE} from "@/components/inbox/inboxOutside.port";

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
