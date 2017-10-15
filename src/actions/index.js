import { CHANGE_AUTH } from './types';

export const authenticate = isLoggedIn => {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    };
};
