import { createSlice } from '@reduxjs/toolkit';
import { postRequest } from '../utils/requestHandler';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        userData: {},
        existsToken: null,
        serverState: true,
    },
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload.userData;
            state.token = action.payload.token;
            state.existsToken = true;
            state.serverState = true;
        },
        setExistsToken: (state, action) => {
            state.existsToken = action.payload;
        },
        setServerState: (state, action) => {
            state.serverState = action.payload;
        },
    },
});

export const { setUserData, setServerState, setExistsToken } = userSlice.actions;

export const login = (data) => async (dispatch) => {
    try {
        const request = await postRequest('http://localhost:4000/users/login', data);
        if (request) {
            dispatch(setUserData({ userData: request.user, token: request.token }));
        } else {
            dispatch(setExistsToken(false));
        }
    } catch (e) {
        dispatch(setServerState(false));
    }
};

export const existsToken = (state) => state.user.existsToken;
export const token = (state) => state.user.token;
export const userData = (state) => state.user.userData;
export const serverState = (state) => state.user.serverState;

export default userSlice.reducer;
