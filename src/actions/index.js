import firebaseAPI from "../apis/firebaseapi";
import history from "../history";

import {
    SELECT_ALL_USERS,
    SELECT_USER,
    CREATE_USER,
    UPDATE_USER,
    DELETE_USER,
    USER_ERROR,
} from "./types";
import { User } from "../components/models/User";

export const fetchUsers = () => async (dispatch) => {
    const response = await firebaseAPI.get("/users.json");
    console.log(response.data);
    // console.log(Object.keys(response.data));

    const list = [];
    for (const key in response.data) {
        if (response.data.hasOwnProperty(key)) {
            list.push(new User(
                    key,
                    response.data[key].first_name,
                    response.data[key].last_name,
                    response.data[key].address_1,
                    response.data[key].address_2,
                    response.data[key].town,
                    response.data[key].region,
                    response.data[key].country,
                    response.data[key].post_code,
                    response.data[key].contact_number
                )
            );
        }
    }

    dispatch({ type: SELECT_ALL_USERS, payload: list });
};

export const fetchUser = (id) => async (dispatch) => {
    const response = await firebaseAPI.get(`/users/${id}.json`);

    dispatch({ type: SELECT_USER, payload: response.data });
};

export const createUser = (formValues) => async (dispatch, getState) => {
    try {
        const response = await firebaseAPI.post(`/users.json`, {
            ...formValues,
        });

        dispatch({
            type: CREATE_USER,
            payload: response.data,
        });

        history.push("/");
    } catch (e) {
        dispatch({
            type: USER_ERROR,
            payload: "Error whilst creating a new User",
        });
    }
};

export const editUser = (id, formValues) => async (dispatch) => {
    const response = await firebaseAPI.put(`/users/${id}.json`, formValues);

    dispatch({ type: UPDATE_USER, payload: response.data });

    history.push("/");
};

export const deleteUser = (id) => async (dispatch) => {
    await firebaseAPI.delete(`/users/${id}.json`);

    dispatch({ type: DELETE_USER, payload: id });
    
    history.push("/");
};
