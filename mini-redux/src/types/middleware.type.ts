type TMiddleware = (store: unknown) => (next: unknown) => (action: unknown) => unknown;

export default TMiddleware;
