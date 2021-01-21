import produce from "immer";
import { Types } from './actions';

// Reducer
const initialState = {
  lawsuit: [],
  sortOrder: 0,
  loading: true,
  end: false,
};

export default function reducer(state = initialState, action) {
  const { payload } = action;

  return produce(state, (draft) => {
    switch (action.type) {
      case Types.UPDATE_SORT_ORDER:
        draft.sortOrder = payload;
        break;
      case Types.LAWSUIT_LIST_REQUEST:
        draft.loading = true;
        break;

      case Types.LAWSUIT_LIST_FAILURE:
        draft.loading = false;
        break;

      case Types.LAWSUIT_LIST_SUCCESS: {
        draft.lawsuit = [...draft.lawsuit, ...payload];
        draft.loading = false;
        break;
      }

      default:
        return state;
    }
  });
}
