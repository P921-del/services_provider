import { actionTypes } from "../../../Reducers/loginReducer/loginActionTypes";

export function HandelLoginSubmitButton(emailOrusernameValue, passwordValue, loginState, dispatch) {
    if (dispatch({ type: actionTypes.CHECK_EMAIL, payload: { email: emailOrusernameValue } })) {
        if (dispatch({ type: actionTypes.CHECKED_PASSWORD, payload: { email: emailOrusernameValue, password: passwordValue } })) {
            // Create Cookie object
        }
        else {
            dispatch({ type: actionTypes.ERROR_CHECK_PASSWORD });
        }
    }
    else {
        dispatch({ type: actionTypes.ERROR_CHECK_EMAIL });
    }
}
