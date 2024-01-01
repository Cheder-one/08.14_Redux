import { TASK_ADDED, TASK_DELETED, TASK_UPDATED } from "./actionTypes";

const taskCompleted = (id) => {
  return {
    type: TASK_UPDATED,
    payload: { id: id, completed: true },
  };
};

const titleChanged = (id) => {
  return {
    type: TASK_UPDATED,
    payload: { id: id, title: `New Title ${id}` },
  };
};

const taskAdded = () => {
  return {
    type: TASK_ADDED,
    payload: { id: Date.now(), title: "New Task", completed: false },
  };
};

const taskDeleted = (id) => {
  return {
    type: TASK_DELETED,
    payload: { id: id },
  };
};

export default {
  taskDeleted,
  taskAdded,
  titleChanged,
  taskCompleted,
};
