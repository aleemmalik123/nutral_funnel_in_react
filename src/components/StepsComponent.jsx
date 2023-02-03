import React from 'react';
import Frame6 from '../assets/images/Frame6.png';
import globaloutsourcing from '../assets/images/global-outsourcing.png';
import StepComponent from './StepComponent';

const StepsComponent = () => {
  return (
    //  become success
    <section id="become_success">
      <h2>How to become successful</h2>
      <h3>in 5 steps</h3>
      {/* <!-- container fluid  --> */}
      <div className="container-fluid">
        {/* <!-- row  --> */}
        <div className="row">
          {/* <!-- col  --> */}
          <div className="col-md-4 text-md-end text-center left_div">
            <div>
              <StepComponent
                text="Spy"
                desc=" First we use insider information to find outwhat supplement
                  funnels are hot."
              />
            </div>
            <div>
              <StepComponent
                text="Funnel hack"
                desc="First we use insider information to find out what
                supplement funnels are hot."
                class="text-md-end text-center"
              />
            </div>
          </div>
          {/* <!-- col  --> */}
          <div className="col-md-4 middle_div">
            <div className="position-relative">
              <img src={Frame6} alt="Frame6" />
              <img
                className="global"
                src={globaloutsourcing}
                alt="global-outsourcing"
              />
            </div>

            <div className="text-center">
              <StepComponent
                text="Outsource"
                desc="We find an offshore outsourcer to put the whole funnel
                together for us."
              />
            </div>
          </div>
          {/* <!-- col  --> */}
          <div className="col-md-4 right_div">
            <div className="text-md-start text-center">
              <StepComponent
                text="Rinse & repeat"
                desc="Then we rinse and repeat! You can do this again and
                again and build as many NutraFunnels as you want! it's
                just that SIMPLE!"
              />
            </div>
            <div className="text-md-start text-center">
              <StepComponent
                text="Traffic outsource"
                desc="Then we outsource all of the traffic-running to an
                affiliate network and PROFIT!"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsComponent;
