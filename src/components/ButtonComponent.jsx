import React from 'react';

const ButtonComponent = ({ text, handleClick }, props) => {
  return (
    <button {...props} onClick={handleClick}>
      {text}
    </button>
  );
};

ButtonComponent.defaultProps = {
  handleClick: () => {},
};

export default ButtonComponent;
