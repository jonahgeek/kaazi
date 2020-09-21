import { alertConstants } from "../_constants";
import { toast } from "react-toastify";
export const alertActions = {
  success,
  error,
  clear,
};

function success(message) {
  return function (dispatch) {
    dispatch({
      type: alertConstants.SUCCESS,
    });
    toast.success(message);
  };
}

function error(message) {
  return function (dispatch) {
    dispatch({
      type: alertConstants.ERROR,
    });
    toast.error(message);
  };
}

function clear() {
  return { type: alertConstants.CLEAR };
}
