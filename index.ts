import { combineReducers, Store } from './mini-redux';

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

function list(state = [], action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.value];
    default:
      return state;
  }
}

const reducer = combineReducers({
  counter,
  list,
});

const store = new Store(reducer);

// eslint-disable-next-line no-console
store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'ADD', value: 'value' });
store.dispatch({ type: 'DECREMENT' });
