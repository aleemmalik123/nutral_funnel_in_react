import React from 'react';

const StepComponent = ({ text, desc }) => {
  return (
    <>
      <h4>{text}</h4>
      <p>{desc}</p>
    </>
  );
};

export default StepComponent;
