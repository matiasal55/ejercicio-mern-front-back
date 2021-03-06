import { createSlice } from '@reduxjs/toolkit';
import { getRequest, postRequest } from '../utils/requestHandler';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        userData: {},
        serverState: true,
        registerState: null,
        loading: false,
    },
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload.userData;
            state.token = action.payload.token;
            state.serverState = true;
            state.registerState = false;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        endSession: (state) => {
            state.token = null;
        },
        setServerState: (state, action) => {
            state.serverState = action.payload;
        },
        setRegister: (state, action) => {
            state.registerState = action.payload;
        },
        setLoading: (state) => {
            state.loading = !state.loading;
        },
    },
});

export const { setUserData, setServerState, setToken, endSession, setRegister, setLoading } = userSlice.actions;

export const login = (data) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const request = await postRequest('/login', data, true);
        dispatch(setLoading());
        dispatch(setUserData({ userData: request.user, token: request.token }));
    } catch (e) {
        if (e.response && e.response.status === 400) dispatch(setToken(false));
        else dispatch(setServerState(false));
        dispatch(setLoading());
    }
};

export const registerUser = (data) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const request = await postRequest('/register', data, true);
        dispatch(setLoading());
        dispatch(setRegister(true));
    } catch (e) {
        if (e.response && e.response.status === 400) dispatch(setRegister(false));
        else dispatch(setServerState(false));
        dispatch(setLoading());
    }
};

export const recoveryData = (token) => async (dispatch) => {
    try {
        const request = await getRequest('/recoveryData', token, true);
        dispatch(setUserData({ userData: request.user, token: request.token }));
    } catch (e) {
        dispatch(setServerState(false));
    }
};

export const logout = () => (dispatch) => {
    dispatch(endSession());
};

export const token = (state) => state.user.token;
export const userSelector = (state) => state.user;

export default userSlice.reducer;
