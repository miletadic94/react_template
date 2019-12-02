import { put, takeLatest } from 'redux-saga/effects'
import { SIMPLE_ACTION_SUCCESS, SIMPLE_ACTION } from '../actions/simpleAction';

export function* simpleAction() {
      yield put({type: SIMPLE_ACTION_SUCCESS, payload: 'Mile'});
      console.log("SAGA")
}

export default function* simpleActionSaga() {
  yield takeLatest(SIMPLE_ACTION, simpleAction);
}