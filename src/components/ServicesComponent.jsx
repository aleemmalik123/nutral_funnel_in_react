import React from 'react';
import multilevelmarketing from '../assets/images/multi-level-marketing.png';
import digitalmarketing1 from '../assets/images/digital-marketing1.png';
import payperclick from '../assets/images/pay-per-click.png';
import bullhorn1 from '../assets/images/bullhorn1.png';
import acceleration from '../assets/images/acceleration.png';
import server from '../assets/images/server.png';
import Frame1 from '../assets/images/Frame1.png';
import Frame2 from '../assets/images/Frame2.png';
import Frame3 from '../assets/images/Frame3.png';
import Frame4 from '../assets/images/Frame4.png';
import Frame5 from '../assets/images/Frame5.png';
import image_4 from '../assets/images/image_4.png';
import image_5 from '../assets/images/image_5.png';
import Untitled_11 from '../assets/images/Untitled_11.png';

import ButtonComponent from './ButtonComponent';

const ServicesComponent = () => {
  return (
    //  join free
    <section id="join_free" className="position-relative">
      {/* <!-- button container  --> */}
      <div className="btn_wrapper">
        <ButtonComponent type="button" text="Yes, I'm In" />
      </div>
      <div className="heading_div" style={{ paddingTop: '4rem' }}>
        <h2>Join For Free - No Charge!</h2>
        <h3>The Best Part is that there’s</h3>
      </div>

      {/* <!-- container  --> */}
      <div className="container" id="marketing">
        {/* <!-- row  --> */}
        <div className="row">
          {/* <!-- col  --> */}
          <div className="col-md-4 text-center">
            <img
              src={multilevelmarketing}
              alt="multi-level-marketing"
            />
            <h3 className="multi-level-marketing">MLM RECRUITING</h3>
            <div className="underline"></div>
            <img
              src={digitalmarketing1}
              alt="digital-marketing1"
              className="mt-0 mt-md-2"
            />
            <h3>FACEBOOK ADS</h3>
          </div>
          {/* <!-- col  --> */}
          <div className="col-md-4 text-center">
            <img src={payperclick} alt="pay-per-click" />
            <h3>SEO/PPC/Youtube</h3>
            <div className="underline big_no_underline"></div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="underline_upper"></div>
              <h1 className="big_no flex-1">NO</h1>
              <div className="underline_upper"></div>
            </div>

            <div className="underline big_no_underline"></div>

            <img
              src={acceleration}
              alt="acceleration"
              style={{ marginTop: '1rem' }}
            />
            <h3>No Buying Inventory</h3>
          </div>
          {/* <!-- col  --> */}
          <div className="col-md-4 text-center">
            <img src={bullhorn1} alt="bullhorn1" />
            <h3 className="affiliate">affiliate Marketing</h3>
            <div className="underline"></div>
            <img src={server} className="mt-md-2" alt="server" />
            <h3>Wordpress or Blogging</h3>
          </div>
        </div>
      </div>

      {/* <!-- wrapper  --> */}
      <div className="wrapper">
        <div>
          <h2>The 6 day Accelerator</h2>
          <h3>IS Complimentary!</h3>
          <img src={Frame1} alt="Frame1" />
        </div>

        <div>
          <h2>In the 6-day</h2>
          <h3>Accelerator</h3>
          <p>
            you'll get the support of hundreds of other people just
            like you that are looking to build profitable passive
            income streams online! These people will help encourage
            you every step of your online business journey.
          </p>
          <img src={Frame2} alt="Frame2" />
        </div>
        {/* <!-- button container  --> */}
        <div className="btn_container">
          <ButtonComponent type="button" text="Yes, I'm In" />
        </div>
        <h6>Join For Free - No Charge!</h6>

        <div>
          <h2>This is for</h2>
          <h3>you if you</h3>
          <p>
            Have already tried to build an online business before and
            <span> failed.</span>
          </p>
          <img src={Frame3} alt="Frame3" />
        </div>
        <div>
          <p>
            Are looking to transition away from a J-O-B and
            <span> replace</span> your primary income source
          </p>
          <img src={Frame4} alt="Frame4" />
        </div>
        <div>
          <h3 style={{ color: '#0b9443' }}>if you currently</h3>
          <h3 style={{ color: '#0b9443' }}>are interested</h3>
          <p>
            in starting a 6 figure online supplement{' '}
            <span> drop-shipping business</span> , automating it and
            working from the comfort of your own home part-time.
          </p>

          <img src={Frame5} alt="Frame5" />
        </div>
      </div>
      {/* <!-- container  --> */}
      <div className="what_to_do container">
        {/* <!-- row  --> */}
        <div className="row">
          {/* <!-- col  --> */}
          <div className="col-md-1"></div>
          {/* <!-- col  --> */}
          <div className="col-md-5 order-2 order-md-1 text-md-end text-center">
            <img src={image_4} className="img-fluid" alt="image_4" />
          </div>
          {/* <!-- col  --> */}
          <div className="order-1 col-md-6 order-md-2 pt-3">
            <h3 className="text-center text-md-start">If You</h3>

            <p className="text-center text-md-start">
              Want expert, credible sound <span>guidance</span> to
              filter all the other
              <span> "noisy marketers" </span>
              telling you what to do.
            </p>
          </div>
        </div>

        <div className="pt-5">
          <h3 className="text-center">If You</h3>
          <p className="text-center">
            Are ready to make real life-changing <span>progress</span>
          </p>
          <h3 className="text-center">in just 6-days!</h3>
          <img
            src={image_5}
            className="img-fluid d-block mx-auto"
            alt="image_5"
            style={{ height: '100%', width: '35rem' }}
          />
        </div>

        <div className="row ready_to_jump">
          {/* <!-- col  --> */}
          <div className="col-md-1"></div>
          {/* <!-- col  --> */}
          <div className="col-md-6 mb-0 mt-md-3 mt-0">
            <h3 className="text-center">Ready To Jump Into The</h3>
            <h3
              className="text-center"
              style={{ color: '#43ac44', textTransform: 'uppercase' }}
            >
              NutraFunnels Accelerator?
            </h3>

            {/* <!-- button container  --> */}
            <div className="btn_container">
              <ButtonComponent type="button" text="Yes, I'm In" />
            </div>
            <p className="text-center mb-0">
              Join For Free - No Charge!
            </p>
          </div>
          <div className="col-md-5">
            <img
              src={Untitled_11}
              className="img-fluid"
              alt="Untitled_11.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;
