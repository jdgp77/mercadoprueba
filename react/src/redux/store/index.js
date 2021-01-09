import { createStore } from 'redux';
import { QUERY_VALUE } from "../options";

const reducer = (state = { queryValue: '' }, action) => {
  switch (action.type) {
    case QUERY_VALUE:
      return { ...state, ...{ queryValue: action.queryValue }}
    default:
      return state
  }
}

export const store = createStore(reducer);