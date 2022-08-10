import {combineReducers} from 'redux';
import orderSlice from '../slices/order';

import userSlice from '../slices/user';

// 전체 상태 중 user를 불러 오는 것
const rootReducer = combineReducers({
  user: userSlice.reducer,
  order: orderSlice.reducer,
});

// ts
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
