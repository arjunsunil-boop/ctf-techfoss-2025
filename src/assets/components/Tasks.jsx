// src/Tasks.js
import React from "react";
import { Link } from "react-router-dom";
import './tailcss.css';
import Navbar from "./Navbar";

const Tasks = () => {
  const tasks = [
    { name: "Task 1", path: "/t1abcd" },
    { name: "Task 2", path: "/t2efgh" },
    { name: "Task 3", path: "/t3hijk" },
    { name: "Task 4", path: "/t4lmnop" },
    { name: "Task 5", path: "/t5qrst" },
    { name: "Task 6", path: "/t6uvwx" },
    { name: "Task 7", path: "/t7abcde" },
    { name: "Task 8", path: "/t8fghij" },
    { name: "Task 9", path: "/t9klmno" },
    { name: "Task 10", path: "/t10pqrst" },
    { name: "Task 11", path: "/t11hdhsj" },
    { name: "Task 12", path: "/t12ksjks" },
    { name: "Task 13", path: "/t13mkvkd" },
    { name: "Task 14", path: "/t14kjssf" },
    { name: "Task 15", path: "/t15isjhd" },
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-10 px-4">
        <h1 className="text-2xl font-semibold mb-6 text-center">All Tasks</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="bg-white p-4 border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Link
                to={task.path}
                className="text-lg font-medium text-blue-600 hover:underline"
              >
                {task.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tasks;
