import './tasks_list.css';

import { useSelector } from 'react-redux';

import { TODO_FILTERS } from '../../utils/constants';

import Task from '../task/task';

const TasksList = () => {
  const todoList = useSelector(state => state.todoList.list);
  const todoFilter = useSelector(state => state.todoList.filter);

  const filteredTodoList = todoList.filter((todo) => {
    switch (todoFilter) {
      case TODO_FILTERS.COMPLETED: 
        return todo.completed === true;
      case TODO_FILTERS.INCOMPLETED: 
        return todo.completed === false;
      default:
        return true;
    }
  });

  console.log(filteredTodoList);
  
  return (
    <div className='tasks-container'>
      {filteredTodoList.map((todo, index) => <Task key={index} todo={todo} />)}
    </div>
  );
};

export default TasksList;