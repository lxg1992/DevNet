import { v4 as uuidv4 } from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./types";

const DEFAULTTIMEOUT = 5000;

export const setAlert = (
    msg,
    alertType,
    timeOut = DEFAULTTIMEOUT
) => dispatch => {
    const id = uuidv4();

    dispatch({
        type: SET_ALERT,
        payload: {
            msg,
            alertType,
            id
        }
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeOut);
};
