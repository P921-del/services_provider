import { actionTypes } from "../../../Reducers/loginReducer/loginActionTypes.ts";
const checkEmailExistInSystem: () => Promise<boolean> = async () => {
  const response = await fetch("link");
  const data = await response.json();
  const existingEmail: boolean = JSON.parse(JSON.stringify(data));
  return existingEmail;
};
const checkCredentialsExistInSystem: () => Promise<boolean> = async () => {
  const response = await fetch("link2");
  const data = await response.json();
  const existingCredentials: boolean = JSON.parse(JSON.stringify(data));
  return existingCredentials;
};
export const changePasswordUsingUserNameAndPassword: (
  userName: string,
  password: string
) => Promise<boolean> = async (userName, password) => {
  const response = await fetch("link");
  const data = await response.json();
  const changePassword: boolean = JSON.parse(JSON.stringify(data));
  return changePassword;
};
export const changePasswordUsingEmailAndPassword: (
  userName: string,
  password: string
) => Promise<boolean> = async (userName, password) => {
  const response = await fetch("link");
  const data = await response.json();
  const changePassword: boolean = JSON.parse(JSON.stringify(data));
  return changePassword;
};
export const HandelLoginSubmitButton = async (
  emailOrusernameValue,
  passwordValue,
  dispatch
) => {
  if (emailOrusernameValue !== "" && passwordValue !== "") {
    // Await the result of the function call
    if (await checkEmailExistInSystem()) {
      if (await checkCredentialsExistInSystem()) {
        dispatch({
          type: actionTypes.CHECKED_PASSWORD,
          payload: { email: emailOrusernameValue, password: passwordValue },
        });
      } else {
        dispatch({ type: actionTypes.ERROR_CHECK_PASSWORD });
      }
    } else {
      dispatch({ type: actionTypes.ERROR_CHECK_EMAIL });
    }
  } else {
    dispatch({ type: actionTypes.CHECKED_CREDIENTIALS_NOT_EMPTY });
  }
};
