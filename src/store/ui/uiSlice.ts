/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';
interface UiState {
  isOpen: boolean;
  message: string | null;
  title: string | null;
  severity: 'success' | 'error' | null;
  color: 'success' | 'error' | null;
}

const initialState: UiState = {
  isOpen: false,
  message: null,
  title: null,
  severity: null,
  color: null
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSuccessMessage: (state, { payload }) => {
      state.isOpen = true;
      state.message = payload?.message;
      state.title = 'success';
      state.color = 'success';
      state.severity = 'success';
    },
    setErrorMessage: (state, { payload }) => {
      state.isOpen = true;
      state.message = payload?.message;
      state.title = 'error';
      state.color = 'error';
      state.severity = 'error';
    },
    closeAlert: (state) => {
      state.isOpen = false;
    }
  }
});

export const { setSuccessMessage, setErrorMessage, closeAlert } = uiSlice.actions;