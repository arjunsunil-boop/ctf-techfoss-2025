import React from "react";
import { Link } from "react-router-dom";
import "./tailcss.css";
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

  const levels = [];
  for (let i = 0; i < tasks.length; i += 3) {
    levels.push(tasks.slice(i, i + 3));
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        {levels.map((level, levelIndex) => (
          <div key={levelIndex} className="level-container mb-4">
            <h2 className="text-left">Level {levelIndex + 1}</h2>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  {level.map((task, taskIndex) => (
                    <div key={taskIndex} className="col-md-4 mb-2">
                      <Link to={task.path} className="btn btn-primary d-block">
                        Go to {task.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
