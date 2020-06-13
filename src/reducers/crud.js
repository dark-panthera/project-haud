import {
    SELECT_ALL_USERS,
    SELECT_USER,
    CREATE_USER,
    UPDATE_USER,
    DELETE_USER,
    USER_ERROR,
} from "../actions/types";
import _ from 'lodash';

const INITIAL_STATE = {
    users: [],
    errorMessage: '',
    user: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_ALL_USERS: {
            return {
                ...state,
                ..._.mapKeys(action.payload, 'id'),
                users: action.payload
            }
        }
        case SELECT_USER: {
            return {
                ...state,
                user: action.payload
            }
        }
        case CREATE_USER: {
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        }
        case USER_ERROR: {
            return {
                ...state,
                errorMessage: action.payload
            };
        }
        case UPDATE_USER: {
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        }
        case DELETE_USER: {
            // return _.omit(state, action.payload);
            return {
                ...state,
                users: state.users.filter(user => user.key !== action.payload)
            }
        }
        default: {
            return state;
        }
    }
}