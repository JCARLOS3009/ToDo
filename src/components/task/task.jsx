import './task.css';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { faTrashCan, faPencil } from '@fortawesome/free-solid-svg-icons';

import { deleteTodo, updateTodo } from '../../slices/todo_list_slice';
import { MODAL_ACTIONS } from '../../utils/constants';

import TodoModal from '../todo_modal/todo_modal';
import AwesomeButton from '../awesome_button/awesome_button';
import Checkbox from '../checkbox/checkbox';

const Task = ({ todo }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(todo.completed);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => setIsChecked(todo.completed), [todo.completed]);

  const onClickDeleteHandler = () => dispatch(deleteTodo(todo));
  const onClickEditHandler = () => setModalOpen(true);
  const onCheckboxHandler = (e) => {
    setIsChecked(e.target.checked);
    dispatch(updateTodo({...todo, completed: e.target.checked }));
  };

  const titleClass = `task-title ${isChecked ? 'completed':''}`;
  
  return (
    <div className='task-container'>
      <div className='task-left-container'>
        <Checkbox onChange={onCheckboxHandler} checked={isChecked}/>
        <div className='task-data'>
          <span className={titleClass}>{todo.title}</span>
          <small className='task-timestamp'>{todo.date}</small>
        </div>
      </div>
      <div className='task-right-container'>
        <AwesomeButton icon={faTrashCan} size="lg" onClick={onClickDeleteHandler} />
        <AwesomeButton icon={faPencil} size="lg" onClick={onClickEditHandler} />
      </div>
      <TodoModal action={MODAL_ACTIONS.UPDATE} modalOpen={modalOpen} setModalOpen={setModalOpen} todo={todo} />
    </div>
  );
};

export default Task;