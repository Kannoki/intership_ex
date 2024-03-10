import { all } from 'redux-saga/effects';
import { authSaga } from '../pages/auth/authSaga';

export default function* rootSaga() {
    yield all([authSaga()]);
}
