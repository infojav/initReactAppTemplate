import { all } from 'redux-saga/effects'
import { sagas as remoteFileSagas } from '../../packages/remoteFile/sagas'

const allSagas = [
    remoteFileSagas
];

export default function* rootSaga() {
    yield all(allSagas);
}


