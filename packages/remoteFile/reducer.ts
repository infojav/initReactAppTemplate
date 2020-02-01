import { Actions, ActionTypes } from './actions'
import { RemoteFileState } from './reducer.interfaces'

export const defaultState: RemoteFileState = {
    url: '',
    data: {},
    isLoading: false,
    loadSuccess: false,
    loadError: null
}

export const reducer = (
  state = defaultState,
  action: Actions
): RemoteFileState => {
  switch (action.type) {

    case ActionTypes.LOADING_REMOTE_FILE: {
      return {
        ...state,
        url: action.payload,
        data: {},
        isLoading: true,
        loadSuccess: false,
        loadError: null
      }
    }
    case ActionTypes.LOAD_SUCCESS_REMOTE_FILE: {
        return {
          ...state,
          data: action.payload,
          isLoading: false,
          loadSuccess: true,
          loadError: null
        }
    }
    case ActionTypes.LOAD_ERROR_REMOTE_FILE: {
        return {
          ...state,
          isLoading: false,
          loadError: action.payload
        }
      }
  }
  return state
}
