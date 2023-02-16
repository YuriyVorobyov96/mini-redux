export class Store {
  private state: unknown;

  private listeners: Function[] = [];

  private reducer: Function;

  constructor(reducer: Function, middleware?: Function) {
    this.reducer = reducer;

    if (middleware) {
      middleware(Store)(reducer)
    }
  }

  public subscribe(callback: Function): void {
    this.listeners.push(callback);
  };

  public dispatch(action: unknown): void {
    this.state = this.reducer(this.state, action);

    this.listeners.forEach(listener => listener());
  };

  public getState() {
    return this.state;
  };
}
