// import { configureStore } from '@reduxjs/toolkit'
// import authSlice from './reducers/authSlice'

// export const store = configureStore({
//   reducer: {
//     auth: authSlice,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
// })

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import authReducer from '../pages/auth/authSlice';

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
