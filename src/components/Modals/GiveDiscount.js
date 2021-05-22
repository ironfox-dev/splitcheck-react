import React from "react";

const GiveDiscount = () => {
  return (
    // <!-- modal-give-discount -->
    <div
      className="modal fade modal-give-discount"
      id="give-discount"
      role="dialog"
      data-focus="false"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content position-relative">
          {/* <!-- modal-header --> */}
          <div className="modal-header d-flex align-items-center">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          {/* <!-- /modal-header --> */}
          {/* <!-- modal-body --> */}
          <div className="modal-body">
            <h2>Do you want to give a discount?</h2>
            {/* <!-- form --> */}
            <form action="#" id="give-discount-form" className="form">
              <div className="form__inputs">
                {/* <!-- for error add className div form__single - *error* --> */}
                <div className="form__single number form__single--fluid">
                  <label className="form__label">Discount amount in %</label>
                  <input
                    type="text"
                    className="form__input"
                    required=""
                    maxlength="7"
                  />
                  <span className="form__symbol-error"></span>
                </div>

                <div className="form__wrap">
                  {/* <!-- for error add className div form__single - *error* --> */}
                  <div className="form__single form__single--date form__single--fluid">
                    <label className="form__label">Expiration date</label>
                    <input
                      type="text"
                      className="form__input"
                      data-toggle="datepicker"
                      required=""
                    />
                    <span className="form__symbol-error"></span>
                  </div>

                  <div className="form__checkbox-wrap form__checkbox-wrap--custom">
                    <input
                      type="checkbox"
                      id="checkbox-remind-two"
                      className="form__checkbox-orange"
                      name="checkbox-remind-two"
                    />
                    <label for="checkbox-remind-two">Offer Free shipping</label>
                  </div>
                </div>
              </div>
              {/* <!-- modal-footer --> */}
              <div className="modal-footer w-100 d-flex align-items-center justify-content-center">
                <button className="btn-form btn-border btn-border--two">
                  No, thanks
                </button>
                <button className="btn-form btn-blue">Offer discount</button>
              </div>
              {/* <!-- /modal-footer --> */}
            </form>
            {/* <!-- /form --> */}
          </div>
          {/* <!-- /modal-body --> */}
          {/* <!-- <div className="modal-footer"></div> --> */}
        </div>
      </div>
    </div>
  );
};

export default GiveDiscount;
