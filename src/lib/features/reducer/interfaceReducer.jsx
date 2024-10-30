import {
  HANDLE_DARK_MODE,
  HANDLE_NAVBAR,
  HANDLE_TOGGLE,
  HANDLE_SCROLL,
} from "../type/interfaceType";

const initialState = {
  darkMode: false,
  scrollActive: false,
  navbarOpen: false,
  toggleActive: false,
};

export const interfaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };

    case HANDLE_NAVBAR:
      return {
        ...state,
        navbarOpen: !state.navbarOpen,
      };

    case HANDLE_TOGGLE:
      return {
        ...state,
        toggleActive: !state.toggleActive,
      };
    default:
      return state;
  }
};
