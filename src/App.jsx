import './App.css';

import { useState } from 'react';

import { MODAL_ACTIONS } from './utils/constants';

import Button from './components/button/button';
import StatusSelector from './components/status_selector/status_selector';
import TasksList from './components/tasks_list/tasks_list';
import TodoModal from './components/todo_modal/todo_modal';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const onAddTaskHandler = (e) => setModalOpen(true);
  
  return (
    <div className='app-container'>
      <h1 className='app-title'>Todo List</h1>
      <div className='app-header'>
        <Button onClick={onAddTaskHandler}>Add Task</Button>
        <StatusSelector />
        <TodoModal action={MODAL_ACTIONS.ADD} modalOpen={modalOpen} setModalOpen={setModalOpen}/>
      </div>
      <div className='app-content'>
        <TasksList />
      </div>
    </div>
  );
};

export default App;