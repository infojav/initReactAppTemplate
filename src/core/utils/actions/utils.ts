// https://medium.com/@martin_hotell/improved-redux-type-safety-with-typescript-2-8-2c11a8062575
export interface ActionHelper<T extends string> {
  type: T
}
export interface ActionWithPayloadHelper<T extends string, P>
  extends ActionHelper<T> {
  payload: P
}
// const typeCache: { [label: string]: boolean } = {}
// eslint-disable-next-line import/export
export function createAction<T extends string>(type: T): ActionHelper<T>
// eslint-disable-next-line import/export
export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayloadHelper<T, P>
// eslint-disable-next-line import/export
export function createAction<T extends string, P>(type: T, payload?: P) {
  // TODO Implement something like this when we get this pattern slightly more refined
  // if (typeCache[type as string]) {
  //   throw new Error(`Action type "${type}" is not unique"`)
  // }
  // typeCache[type as string] = true
  return payload === undefined ? { type } : { type, payload }
}

export const simpleActionCreator = <T extends string>(actionType: T) => () =>
  createAction(actionType)
