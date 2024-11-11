import {
  FaPython,
  FaCode,
  FaRocket,
  FaBrain,
  FaProjectDiagram,
} from "react-icons/fa";
import React from "react";

const LearnPython = () => {
  return (
    <div className="flex flex-col items-center py-10 px-6 font-medium my-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Why Learn Python?
      </h2>
      <div className="bg-blue-50 p-6 rounded-lg shadow-md max-w-5xl">
        <ul className="space-y-4 text-md text-gray-700">
          <li className="flex items-start space-x-3">
            <FaPython className="text-blue-500 mt-1" />
            <span>
              Easy to learn with a simple syntax, making it ideal for beginners.
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCode className="text-blue-500 mt-1" />
            <span>
              Highly versatile language used for web development, data science,
              machine learning, and more.
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <FaRocket className="text-blue-500 mt-1" />
            <span>
              Rapid development, allowing you to build projects quickly and
              efficiently.
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <FaBrain className="text-blue-500 mt-1" />
            <span>
              Great for automating tasks, helping you improve productivity in
              personal and professional projects.
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <FaProjectDiagram className="text-blue-500 mt-1" />
            <span>
              Huge community support with countless libraries and frameworks to
              accelerate your development.
            </span>
          </li>
        </ul>
        <p className="mt-6 text-xl text-gray-800 text-center font-semibold">
          Start your Python journey today and unlock endless possibilities.
        </p>
      </div>
    </div>
  );
};

export default LearnPython;
