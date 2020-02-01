import { AppState } from './app/reducer.interface'
import { RemoteFileState } from '../../packages/remoteFile/reducer.interfaces'

export interface ApplicationState {
    app: AppState,
    RemoteFile: RemoteFileState,
}