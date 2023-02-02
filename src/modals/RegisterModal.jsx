import React, { useRef } from 'react';
import Group222 from '../assets/images/Group-222.png';
import Group55 from '../assets/images/Group-55.png';

const RegisterModal = (props) => {
  const { isModalOpen, setIsModalOpen } = props;

  const modalRef = useRef(null);

  const checkClick = (e) => {
    if (e.target === modalRef.current) {
      setIsModalOpen(false);
    }
  };
  return (
    <div
      className={`modal fade ${isModalOpen && 'show'} `}
      id="registerModal"
      tabIndex="-1"
      aria-labelledby="registerModal"
      aria-hidden="true"
      style={{ display: isModalOpen ? 'block' : 'none' }}
      role="dialog"
      onClick={checkClick}
      ref={modalRef}
    >
      <div className="modal-dialog modal-lg show">
        <div className="modal-content position-relative">
          <div className="modal-body">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                  <div className="form_container">
                    <form>
                      <h2>Sign up</h2>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Name"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="password"
                          placeholder="Password"
                        />
                      </div>

                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          placeholder="+1(xx)-xxxx"
                        />
                      </div>

                      <h4>Join for free-No charge!</h4>
                      <button
                        id="button"
                        type="button"
                        data-bs-dismiss="modal"
                        className="btn"
                      >
                        Join Us Now
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <img
              src={Group222}
              alt="Group-222"
              className="left_img"
            />
            <img src={Group55} alt="Group-55" className="right_img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
