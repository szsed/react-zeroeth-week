'use strict';

import { BUY_ONE, EAT_ONE } from '../actions/types';

const initialState = {
  acorns: 0
};

const acornReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ONE:
      return {
        acorns: state.acorns + action.payload
      };
    case EAT_ONE:
      if (state.acorns > 0) return {
        acorns: state.acorns - action.payload
      };
    default:
      return state;
  }
}

export default acornReducer;