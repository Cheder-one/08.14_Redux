import { useEffect, useState } from "react";
import { initStore, actions } from "./store";

const store = initStore();

const App = () => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
      console.log(store.getState());
    });
  }, []);

  const handleTaskComplete = (id) => {
    store.dispatch(actions.taskCompleted(id));
  };

  const handleTitleChange = (id) => {
    store.dispatch(actions.titleChanged(id));
  };

  const handleTaskAdd = () => {
    store.dispatch(actions.taskAdded());
  };

  const handleTaskDelete = (id) => {
    store.dispatch(actions.taskDeleted(id));
  };

  return (
    <>
      <h1>App</h1>
      <p />
      {state.map((task) => (
        <li key={task.id}>
          <span>{task.title}</span>
          <span> {task.completed ? "✅" : "❌"}</span> <p />
          <button onClick={() => handleTaskComplete(task.id)}>Complete</button>
          <button onClick={() => handleTitleChange(task.id)}>
            Change Title
          </button>
          <button onClick={() => handleTaskDelete(task.id)}>Delete</button>
          <hr />
        </li>
      ))}
      <button onClick={handleTaskAdd}>Add Task</button>
    </>
  );
};

export default App;
