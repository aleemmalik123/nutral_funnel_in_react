import React from 'react';

const StepComponent = ({ text, desc }, props) => {
  return (
    <>
      <h4>{text}</h4>
      <p className={props.class ? props.class : ''}>{desc}</p>
    </>
  );
};

export default StepComponent;
