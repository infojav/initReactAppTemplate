import { takeLatest, put } from "redux-saga/effects"
import { ActionTypes, actions } from "./actions"

function* fetchData(action: any) {

    const url = `github/Remotefile?url=${action.payload}`

    try {
        const data = yield fetch(url).then(r => r.json())

        if (data.statusCode && data.statusCode > 299) {
            yield put(actions.loadErrorRemoteFile(new Error(`Error code: ${data.statusCode}, message: ${data.message}`)))
        } else {
            yield put(actions.loadSuccessRemoteFile(data))
        }
    } catch(err) {
        yield put({ type: ActionTypes.LOAD_ERROR_REMOTE_FILE, payload: err })
    }
}

export function* sagas() {
    yield takeLatest(ActionTypes.LOADING_REMOTE_FILE as any, fetchData)
}

// export default sagas;