import { actionTypes } from "./loginReducer/loginActionTypes.ts";
interface inputFieldType {
  value: string;
  isChecked: boolean;
}
interface loggedInType {
  value: boolean;
}
interface number_of_failed_trialsType {
  value: number;
}
interface errorsType {
  isExist: boolean;
  value: string | "";
}
export interface initialStateType {
  email: inputFieldType;
  password: inputFieldType;
  loggedIn: loggedInType;
  number_of_failed_trials: number_of_failed_trialsType;
  errors: errorsType;
}
export interface ActionType {
  type: string;
  payload: ActionPayloadType;
}
interface ActionPayloadType {
  email: string | "";
  password: string | "";
}
export const initialState: initialStateType = {
  email: {
    value: "",
    isChecked: false,
  } as inputFieldType,
  password: {
    value: "",
    isChecked: false,
  } as inputFieldType,
  loggedIn: {
    value: false,
  } as loggedInType,
  number_of_failed_trials: {
    value: 0,
  } as number_of_failed_trialsType,
  errors: {
    isExist: false,
    value: "",
  } as errorsType,
};
const loginReducer: (
  state: initialStateType,
  action: ActionType
) => initialStateType = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.CHECKED_CREDIENTIALS_NOT_EMPTY: {
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
        number_of_failed_trials: {
          value: state.number_of_failed_trials.value + 1,
        },
        loggedIn: {
          value: false,
        },
        errors: {
          isExist: true,
          value:
            "Your login failed, please check your credientials and try again",
        },
      };
    }
    case actionTypes.ERROR_CHECK_EMAIL: {
      const errorMessage: string = "User not found";
      return {
        ...state,
        email: {
          value: "",
          isChecked: false,
        },
        number_of_failed_trials: {
          value: state.number_of_failed_trials.value + 1,
        },
        loggedIn: {
          value: false,
        },
        errors: {
          isExist: true,
          value: errorMessage,
        },
      };
    }
    case actionTypes.ERROR_CHECK_PASSWORD: {
      const errorMessage: string =
        "The username and password" +
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
        number_of_failed_trials: {
          value: state.number_of_failed_trials.value + 1,
        },
        loggedIn: {
          value: false,
        },
        errors: {
          isExist: true,
          value: errorMessage,
        },
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
        loggedIn: {
          value: true,
        },
        errors: {
          isExist: false,
          value: "",
        },
      };
    }
    default:
      return state;
  }
};
export default loginReducer;
