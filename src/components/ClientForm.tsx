"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "@/store/slices/dataSlice";
import { RootState, AppDispatch } from "@/store/store";
import Skeleton from "@/ui/Skeleton";

export default function ClientForm() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.data
  );

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="border-y border-[#333] py-10 border-dashed">
      <h1>Client-Side Fetching</h1>
      {loading ? (
        <Skeleton row={3} />
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
