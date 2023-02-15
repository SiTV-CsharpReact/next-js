import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';


const store = configureStore({
  reducer: {
  },
});
export const store_0001 = store;
export type AppState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch();