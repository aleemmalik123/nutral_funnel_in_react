import React from 'react';
import Group from '../assets/images/Group.png';

const AboutComponent = () => {
  return (
    // section
    <section id="description">
      <div className="description_container">
        <h2>In only 6 days</h2>
        <p>
          we're going to show you exactly how you can copy our success
          step-by-step and build your own NutraFunnel that
          auto-dropships your own private label supplement for you
        </p>
        <h2>In just 6 days</h2>
        <p>
          We are going to guide you through this simple, 6 step
          program, that will help you to
        </p>
        <p>
          <img
            src={Group}
            alt="Group"
            style={{ marginRight: '0.3rem' }}
          />
          Quit Your Job
        </p>
        <p>
          <img src={Group} alt="Group" /> Retire
        </p>
        <p>
          <img
            src={Group}
            alt="Group"
            style={{ marginRight: '0.3rem' }}
          />
          Get the life and Bank Account That You Want
        </p>
      </div>
    </section>
  );
};

export default AboutComponent;
