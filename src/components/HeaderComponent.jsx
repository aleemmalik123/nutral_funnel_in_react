import React, { useState } from 'react';
import Logo_1 from '../assets/images/Logo_1.png';
import Group_2 from '../assets/images/Group-2.png';
import Group_22 from '../assets/images/Group-22.png';
import Group_5 from '../assets/images/Group-5.png';
import ButtonComponent from './ButtonComponent';
import RegisterModal from '../modals/RegisterModal';

const HeaderComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState('');
  return (
    <header>
      <div className="header_bg_img">
        {/* logo div   */}
        <div className="text-center">
          <img
            src={Logo_1}
            className="header_logo img-fluid"
            alt="logo"
          />
        </div>

        {/* header content   */}
        <div className="header_content">
          <div className="container-fluid">
            <div className="row g-0">
              {/* col-3   */}
              <div className="col-3">
                <div className="header_content_left">
                  <img
                    className="img-fluid"
                    src={Group_2}
                    alt="ROC281"
                  />
                </div>
              </div>
              {/* col-6   */}
              <div className="col-6 position-relative">
                <div className="header_content_middle text-center">
                  <div
                    className="position-relative"
                    style={{ display: 'inline-block' }}
                  >
                    <h1 data-text="Join Our">Join Our</h1>
                  </div>

                  <p className="para1">
                    6-Day Health-Supplement Drop-Shipping Business
                    Accelerator
                  </p>
                  <p className="para2">
                    Discover how to build a 6 figure Supplement
                    Drop-shipping Business In 6 Days WITHOUT Paying
                    for Facebook Ads Or Traffic!
                  </p>
                </div>

                {/* register div  for larger screen >= 992px  */}
                <div className="register m-0 text-center d-none d-lg-block">
                  <h2>6 days</h2>

                  <img
                    src={Group_22}
                    className="computer_img img-fluid"
                    alt="Group-22"
                  />

                  <div className="btn_div">
                    <ButtonComponent
                      type="button"
                      text="Register now"
                      handleClick={() => setIsModalOpen(true)}
                    />
                  </div>
                </div>
              </div>
              {/* col-3   */}
              <div className="col-3">
                <div className="header_content_right">
                  <img
                    className="img-fluid"
                    src={Group_5}
                    alt="ROC281_1(1)"
                  />
                </div>
              </div>
              {/* register div   */}
              <div className="register m-0 text-center d-lg-none">
                <h2>6 days</h2>
                <img src={Group_22} alt="Group-22" />
                <div className="btn_div">
                  <ButtonComponent
                    type="button"
                    text="Register now"
                    handleClick={() => setIsModalOpen(true)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* registr modal  */}
      <RegisterModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </header>
  );
};

export default HeaderComponent;
