import {combineReducers} from 'redux';

import userSlice from '../slices/user';

// 전체 상태 중 user를 불러 오는 것
const rootReducer = combineReducers({
  user: userSlice.reducer,
});

// ts
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
