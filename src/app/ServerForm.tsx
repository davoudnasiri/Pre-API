// src/app/ServerForm.tsx
import { Item } from "@/store/slices/dataSlice";

export default async function ServerForm() {
  // const response = await fetch("http://localhost:3000/api/data");

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=3"
  );
  const data: Item[] = await response.json();

  return (
    <div>
      <h1>Server-Side Fetching</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.userId}</td>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
