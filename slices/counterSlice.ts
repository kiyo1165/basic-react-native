import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

const initialState = {
  count: 3,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    addByPayload: (state, action: PayloadAction<number | any>) => {
      state.count = state.count + action.payload;
    },
  },
});

//作成したアクションをexport
export const { increment, decrement, addByPayload } = counterSlice.actions;

//useSelecterで使用するため、storeで登録したRootStateを呼び出して、値をexportしている。
export const selectCount = (state: RootState) => state.counter.count;
//storeでreducerを取得するためにexportする。
export default counterSlice.reducer;
