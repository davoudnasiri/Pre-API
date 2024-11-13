import React from "react";

interface SkeletonProps {
  row: number;
}

export default function Skeleton({ row }: SkeletonProps) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(row)].map((_, index) => (
            <tr key={index}>
              <td>
                <div className="bg-gray-200 rounded w-10 h-4 animate-pulse"></div>
              </td>
              <td>
                <div className="bg-gray-200 rounded w-24 h-4 animate-pulse"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
