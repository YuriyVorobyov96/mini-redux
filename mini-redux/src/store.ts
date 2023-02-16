import TListener from './types/listener.type';
import TMiddleware from './types/middleware.type';
import TReducer from './types/reducer.type';

export class Store {
  private state: unknown;

  private listeners: TListener[] = [];

  private reducer: TReducer;

  constructor(reducer: TReducer, middleware?: TMiddleware) {
    this.reducer = reducer;

    if (middleware) {
      middleware(this.create)(reducer);
    }
  }

  public subscribe(callback: TListener): void {
    this.listeners.push(callback);
  }

  public dispatch(action: unknown): void {
    this.state = this.reducer(this.state, action);

    this.listeners.forEach((listener) => listener());
  }

  public getState(): unknown {
    return this.state;
  }

  private create(reducer): Store {
    return new Store(reducer);
  }
}
