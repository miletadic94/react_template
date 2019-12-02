import { all } from 'redux-saga/effects';
import simpleActionSaga from './simpleAction.saga';

export default function* rootSaga() {
    yield all([
        simpleActionSaga
    ])
}