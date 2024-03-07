import { create, StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  mode: boolean;
};

type Actions = {
  /** reset auth store to initial state */
  reset: () => void;
  /**
   * authenticate user
   * @param {Object} details - object containing user object and token
   */
  getMode: () => State['mode'];
  setMode: () => void;
};

const initialState: State = {
  mode: false,
};

const authStore: StateCreator<State & Actions> = (set, get) => ({
  ...initialState,
  reset: () => set(initialState),
  getMode: () => get().mode,
  setMode: () => set((state) => ({ mode: !state.mode })),
});

const useMode = create(persist(authStore, { name: 'kreditafrica-test-mode' }));

export { useMode };
