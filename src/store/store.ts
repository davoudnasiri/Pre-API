import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "@/store/slices/dataSlice";
import counterReducer from "@/store/slices/counterSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
