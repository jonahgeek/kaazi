import { userConstants } from "../_constants";

const initialState = {
  loading: false,
  noResponse: false,
};
export function users(state = initialState, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        ...state,
        loading: true,
        noResponse: false,
      };
    case userConstants.GETALL_SUCCESS:
      return {
        ...state,
        items: action.users,
        loading: false,
      };
    case userConstants.GETALL_FAILURE:
      return {
        state,
        error: action.error,
        loading: false,
        noResponse: true,
      };
    case userConstants.DELETE_REQUEST:
      return {
        ...state,
        items: state.items.map((user) =>
          user.id === action.id ? { ...user, deleting: true } : user
        ),
        loading: true,
      };
    case userConstants.DELETE_SUCCESS:
      return {
        state,
        loading: false,
      };
    case userConstants.DELETE_FAILURE:
      return {
        state,
        items: state.items.map((user) => {
          if (user.id === action.id) {
            const { deleting, ...userCopy } = user;

            return { ...userCopy, deleteError: action.error };
          }

          return user;
        }),
        loading: false,
      };
    default:
      return state;
  }
}
