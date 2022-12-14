import { AnyAction } from "redux";

import {
    signInFailed,
    signUpFailed,
    signOutFailed,
    signOutSuccess,
    signInSuccess
} from "./user.action";

import { UserData } from "../../utils/firebase/firebase.utils";

export type UserState = {
    readonly currentUser: UserData | null;
    readonly isLoading: Boolean;
    readonly error: Error | null;
};

const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null,
}

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
    if (signInSuccess.match(action)) {
        return { ...state, currentUser: action.payload}
    }

    if (signOutSuccess.match(action)) {
        return { ...state, currentUser: null}
    }
    
    if (
        signOutFailed.match(action) || 
        signUpFailed.match(action) || 
        signInFailed.match(action)
    ) {
        return { ...state, errorr: action.payload}
    }

    return state;

};