import { Actions, ActionTypes } from './actions'
import { AppState } from './reducer.interface'

export const defaultState: AppState = {
    isInitializated: false,
}

export const reducer = (
  state = defaultState,
  action: Actions
): AppState => {
  switch (action.type) {
    case ActionTypes.INIT_APP: {
      return {
        ...state,
        ...{ isInitializated: true }
      }
    }
    default: {
      return state;
    }
  }
}
