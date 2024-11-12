"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  incrementAsync,
} from "@/store/slices/counterSlice";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>Redux Concepts</h2>
      <h2 className="my-5">
        Counter:{" "}
        <span className="bg-[#777] px-3 py-1 border border-gray-600 rounded-md">
          {count}
        </span>
      </h2>
      <div className="flex justify-start items-center gap-2 mb-2">
        <button className="btn-primary" onClick={() => dispatch(increment())}>
          Incr +1
        </button>
        <button className="btn-primary" onClick={() => dispatch(decrement())}>
          Decr -1
        </button>
        <button
          className="btn-primary"
          onClick={() => dispatch(incrementAsync(100))}
        >
          Incr Async
        </button>
      </div>
      <div className="flex justify-start items-center gap-2">
        <button
          className="btn-primary"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Incr +10
        </button>
        <button
          className="btn-primary"
          onClick={() => dispatch(decrementByAmount(10))}
        >
          Decr -10
        </button>
      </div>
    </div>
  );
}
