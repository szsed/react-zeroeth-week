import { BUY_ONE, EAT_ONE } from './types';

export const buyOneAction = () => ({
  type: BUY_ONE,
  payload: 1,
});

export const eatOneAction = () => ({
  type: EAT_ONE,
  payload: 1,
});
