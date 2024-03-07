import { all } from 'redux-saga/effects';
import { authSaga } from '../api/authSaga';

export default function* rootSaga() {
  yield all([authSaga()]);
}
