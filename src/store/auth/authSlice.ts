/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';
interface AuthState {
  status: string;
  uid?: string | null;
  email?: string | null;
  displayName?: string | null;
  fullName?: string | null;
  errorMessage?: string | null;
  role: string | null;
}

const initialState: AuthState = {
  status: 'checking',
  uid: null,
  email: null,
  displayName: null,
  errorMessage: null,
  role: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.status = 'authenticated',
        state.uid = payload.uid,
        state.email = payload.email,
        state.role = payload.rol,
        state.fullName = payload.fullName,
        state.displayName = payload.displayName,
        state.errorMessage = payload.errorMessage
    },
    logOut: (state, { payload }) => {
      state.status = 'not-authenticated',
        state.uid = null,
        state.email = null,
        state.role = null,
        state.displayName = null,
        state.errorMessage = payload?.errorMessage
    },
    checkingCredentials: (state) => {
      state.status = 'checking'
    },
    finishCheckingCredentials: (state) => {
      state.status = 'authenticated'
    },
    setMessage: (state, { payload }) => {
      state.errorMessage = payload?.errorMessage
    }
  }
});

export const { login, logOut, checkingCredentials, finishCheckingCredentials, setMessage } = authSlice.actions;