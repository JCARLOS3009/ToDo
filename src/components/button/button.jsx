import './button.css';

const Button = ({ children, ...options }) => {
  return (
    <button className='button' {...options}>
      {children}
    </button>
  )
};

export default Button;