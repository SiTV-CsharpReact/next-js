import { createStore } from '@reduxjs/toolkit';
import React from 'react'
import counterReducer from './counterReducer';

const configureStore = () => {
  return createStore(counterReducer);
}

export default configureStore