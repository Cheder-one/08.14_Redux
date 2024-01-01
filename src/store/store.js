import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskReducer";

const preloadedState = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: false },
];

const initiateStore = () => {
  return configureStore({ reducer: taskReducer, preloadedState });
};

export default initiateStore;
