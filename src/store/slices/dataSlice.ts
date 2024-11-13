import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export interface Item {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

interface DataState {
  items: Item[];
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  items: [],
  loading: true, // for afew moments after refresh
  error: null,
};

export const fetchData = createAsyncThunk("data/fetch", async () => {
  const response = await fetch("http://localhost:3000/api/data");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<Item[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

export default dataSlice.reducer;
