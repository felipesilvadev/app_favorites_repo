import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';

export default function modulo06() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}
