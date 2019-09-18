'use strict';

import { BUY_ONE, EAT_ONE } from "./types";

export const buyOneAction = () => {
  return {
    type: BUY_ONE,
    payload: 1
  }
}

export const eatOneAction = () => {
  return {
    type: EAT_ONE,
    payload: 1
  }
}
