export const Types = {
  UPDATE_SORT_ORDER: '@lawsuit/UPDATE_SORT_ORDER',
  LAWSUIT_LIST_FAILURE: '@lawsuit/LAWSUIT_LIST_FAILURE',
  LAWSUIT_LIST_REQUEST: '@lawsuit/LAWSUIT_LIST_REQUEST',
  LAWSUIT_LIST_SUCCESS: '@lawsuit/LAWSUIT_LIST_SUCCESS',
};

export function lawsuitListRequest() {
  return {
    type: Types.LAWSUIT_LIST_REQUEST,
  };
}

export function lawsuitListSuccess(data) {
  return {
    type: Types.LAWSUIT_LIST_SUCCESS,
    payload: data,
  };
}
export function lawsuitSortOrder(order) {
  return {
    type: Types.LAWSUIT_SORT_ORDER,
    payload: order,
  };
}

export function lawsuitListFailure(error) {
  return {
    type: Types.LAWSUIT_LIST_FAILURE,
    payload: error,
  };
}
