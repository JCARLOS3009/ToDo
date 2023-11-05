import './status_selector.css';

import { useDispatch } from 'react-redux';

import { updateTodoFilter } from '../../slices/todo_list_slice';
import { TODO_FILTERS } from '../../utils/constants';

const StatusSelector = ({ children, ...options }) => {
  const dispatch = useDispatch();

  const onSelectChange = (e) => dispatch(updateTodoFilter(e.target.value));
  
  return (
    <select className='selector' onChange={onSelectChange} {...options}>
      {
        Object.values(TODO_FILTERS).map((filter) => {
          return (<option value={filter}>{filter}</option>);
        })
      }
    </select>
  );
};

export default StatusSelector;