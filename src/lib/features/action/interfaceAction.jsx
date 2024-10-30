import {
  HANDLE_DARK_MODE,
  HANDLE_TOGGLE,
  HANDLE_NAVBAR,
  HANDLE_SCROLL,
} from "../type/interfaceType";

export const handleScroll = () => async (dispatch) => {
  dispatch({ type: HANDLE_SCROLL });
};
export const handleDarkMode = () => async (dispatch) => {
  dispatch({ type: HANDLE_DARK_MODE });
};

export const handleToggle = () => async (dispatch) => {
  dispatch({ type: HANDLE_TOGGLE });
};

export const handleNavbar = () => async (dispatch) => {
  dispatch({ type: HANDLE_NAVBAR });
};
