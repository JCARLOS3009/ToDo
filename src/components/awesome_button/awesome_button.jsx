import './awesome_button.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Task = ({ icon, size, ...options }) => {
  return (
    <button className='awesome-button' {...options}>
      <FontAwesomeIcon icon={icon} size={size} />
    </button>
  );
};

export default Task;