import React from 'react';

import Header from '../../Components/Header';
import Producers from './Components/Producers';

export default function Home() {
  return (
    <>
      <Producers header={Header} />
    </>
  );
}
