


/* eslint-disable prefer-const */

import { configureStore } from '@reduxjs/toolkit';
import nahidReducer from "./nahidSlice";
import { persistStore, persistReducer, WebStorage } from 'redux-persist';
import createWebStorage from 'redux-persist/es/storage/createWebStorage';

// Correct the function name
export function createPersistStore(): WebStorage {
  const isServer = typeof window === "undefined";
  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  }
  return createWebStorage("local");
}

// Rename local variable to avoid conflict with the imported `storage`
const customStorage = typeof window !== "undefined" ? createWebStorage("local") : createPersistStore();

const persistConfig = {
  key: 'root',
  version: 1,
  storage: customStorage,
};

const persistedReducer = persistReducer(persistConfig, nahidReducer);

export const store = configureStore({
  reducer: {
    nahid: persistedReducer,
  },
});

export let persistor = persistStore(store);
