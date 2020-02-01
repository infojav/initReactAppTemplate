import { ActionsUnion } from '../../src/core/utils/actions/types'
import { createAction } from '../../src/core/utils/actions/utils'

export enum ActionTypes {
    LOADING_REMOTE_FILE = '@remoteFile/LOADING',
    LOAD_SUCCESS_REMOTE_FILE = '@remoteFile/LOAD_SUCCESS',
    LOAD_ERROR_REMOTE_FILE = '@remoteFile/LOAD_ERROR',
}

export const actions = {
    loadingRemoteFile: (fileUrl: string) => createAction(ActionTypes.LOADING_REMOTE_FILE, fileUrl),
    loadSuccessRemoteFile: (data: object) => createAction(ActionTypes.LOAD_SUCCESS_REMOTE_FILE, data),
    loadErrorRemoteFile: (error: Error) => createAction(ActionTypes.LOAD_ERROR_REMOTE_FILE, error),
}

export type Actions = ActionsUnion<typeof actions>