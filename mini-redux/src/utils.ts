import TReducer from './types/reducer.type';

class Utils {
  public static combineReducers(reducers: Record<string, TReducer>): TReducer {
    return (state: unknown = {}, action: unknown) => {
      const nextState = {};

      Object.entries(reducers).forEach(([key, reducer]) => {
        const previousStateForKey = state[key];
        const nextStateForKey = reducer(previousStateForKey, action);
        nextState[key] = nextStateForKey;
      });

      return nextState;
    };
  }
}

export const { combineReducers } = Utils;
