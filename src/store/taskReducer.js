import { TASK_ADDED, TASK_DELETED, TASK_UPDATED } from "./actionTypes";

function taskReducer(state, action) {
  switch (action.type) {
    case TASK_UPDATED:
      return state.map((task) => {
        return task.id === action.payload.id
          ? { ...task, ...action.payload }
          : task;
      });
    case TASK_ADDED:
      return [...state, action.payload];
    case TASK_DELETED:
      return state.filter((item) => {
        return item.id !== action.payload.id;
      });

    default:
      return state;
  }
}

export default taskReducer;
