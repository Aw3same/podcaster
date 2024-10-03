import { StateCreator } from 'zustand';

const actualCreate = jest.requireActual('zustand').create;

export const create = <T extends object>(createState: StateCreator<T>) => {
  const store = actualCreate(createState);
  const initialState = store.getState();
  
  const resetState = () => {
    store.setState(initialState, true);
  };

  return Object.assign(store, { resetState })
};