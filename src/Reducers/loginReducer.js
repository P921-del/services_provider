import React from 'react'
import { actionTypes } from './loginReducer/loginActionTypes';
export const initialState = {
  email: {
    value: "",
    isChecked: false,
  },
  password: {
    value: "",
    isChecked: false,
  },
  loggedIn: {
    value: false,
  },
  number_of_times_the_submit_button_was_pressed: {
    value: 0,
  },
  errors: {
    isExist: false,
    value: [],
  }
}
export default function loginReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.CHECK_EMAIL: {
      return {
        ...state,
        email: {
          value: payload.email,
          isChecked: true,
        },
        number_of_times_the_submit_button_was_pressed: {
          value: state.number_of_times_the_submit_button_was_pressed.value + 1,
        }
      };
    }
    case actionTypes.CHECKED_PASSWORD: {
      return {
        ...state,
        email: {
          value: payload.email,
          isChecked: true,
        },
        password: {
          value: payload.password,
          isChecked: true,
        },
        number_of_times_the_submit_button_was_pressed: {
          value: state.number_of_times_the_submit_button_was_pressed.value + 1,
        },
        loggedIn: {
          value: true,
        }
      };
    }
    case actionTypes.ERROR_CHECK_EMAIL: {
      const errorMessage = "User not found";
      return {
        ...state,
        email: {
          value: "",
          isChecked: false,
        },
        number_of_times_the_submit_button_was_pressed: {
          value: state.number_of_times_the_submit_button_was_pressed.value + 1,
        },
        loggedIn: {
          value: false,
        },
        errors: {
          isExist: true,
          value: [...state.errors.value, errorMessage],
        }
      };
    }
    case actionTypes.ERROR_CHECK_PASSWORD: {
      const errorMessage = "The username and password" +
        "did not match a user. please check your credentials and try again.";
      return {
        ...state,
        email: {
          value: "",
          isChecked: false,
        },
        password: {
          value: "",
          isChecked: false,
        },
        number_of_times_the_submit_button_was_pressed: {
          value: state.number_of_times_the_submit_button_was_pressed.value + 1,
        },
        loggedIn: {
          value: false,
        },
        errors: {
          isExist: true,
          value: [...state.errors.value, errorMessage],
        }
      };
    }
    default: return initialState;
  }

}
