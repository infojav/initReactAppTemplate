import { ReducersMapObject } from 'redux'

import { ApplicationState } from './reducers.interfaces'

import { reducer as appReducer } from './app/reducer'
import { reducer as RemoteFileReducer } from '../../packages/remoteFile/reducer'

export const appReducers: ReducersMapObject<ApplicationState, any> = {
    app: appReducer,
    RemoteFile: RemoteFileReducer

}