import React from "react";

const AddTimelinDashboard = () => {
  return (
    // <!-- modal-add-timeline-dashboard -->
    <div
      className="modal fade modal-add-timeline-dashboard"
      id="add-timeline-dashboard"
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
            <h2 className="text-dark-blue">Add to timeline</h2>
            {/* <!-- form --> */}
            <form action="#" id="add-timeline-form" className="form">
              <div className="form__inputs">
                {/* <!-- for error add className div form__single - *error* --> */}
                <div className="form__single form__single--fluid">
                  <label className="form__label">Title</label>
                  <input
                    type="text"
                    className="form__input"
                    required=""
                    placeholder="Gift for John"
                  />
                  <span className="form__symbol-error"></span>
                </div>
                <div className="form__single form__single--fluid">
                  <label className="form__label">Comment</label>
                  <div className="w-100 max-text" data-maxlength="400">
                    <textarea
                      className="form__textarea"
                      placeholder="Write something"
                      maxlength="400"
                    ></textarea>
                    <div className="count">
                      <span>0</span>/<span>400</span>
                    </div>
                  </div>
                  <span className="form__symbol-error"></span>
                </div>

                <div className="form__wrap">
                  <span className="form__wrap-title">Date and time</span>
                  {/* <!-- for error add className div form__single - *error* --> */}
                  <div className="form__single form__single--date form__single--fluid">
                    <label className="form__label">Set a follow-up date</label>
                    <input
                      type="text"
                      className="form__input"
                      data-toggle="datepicker"
                      required=""
                    />
                    <span className="form__symbol-error"></span>
                  </div>
                  {/* <!-- for error add className div form__single - *error* --> */}
                  <div className="form__single form__single--time form__single--fluid">
                    <label className="form__label">Set a time</label>
                    <input
                      type="text"
                      className="form__input"
                      data-toggle="timepicker"
                      required=""
                    />
                    <span className="form__symbol-error"></span>
                  </div>

                  <div className="form__checkbox-wrap form__checkbox-wrap--custom">
                    <input
                      type="checkbox"
                      id="checkbox-remind"
                      className="form__checkbox-orange"
                      name="checkbox-remind"
                    />
                    <label for="checkbox-remind">Remind me a day before</label>
                  </div>
                </div>

                <div className="form__wrap">
                  <span className="form__wrap-title">Add image (optional)</span>
                  <div className="form__single">
                    <a
                      href="#add-photo"
                      data-toggle="modal"
                      className="new-banner position-relative d-flex align-items-center justify-content-center"
                    >
                      <i className="icon icon-plus-blue"></i>
                    </a>
                  </div>
                </div>

                <div className="form__wrap form__wrap--location">
                  <div className="sort-box">
                    <div className="sort-box__line sort">
                      <div className="sort-box__select">
                        <span className="sort-box__arrow">
                          <strong>Location</strong>
                          <img
                            src="../../images/icons/navigate_next-24px.svg"
                            alt="arrow"
                          />
                        </span>
                        <div className="form__single form__single--select form__single--select-default form__single--fluid">
                          <select
                            className="form__select form__select--default"
                            data-toggle="select-parent"
                          >
                            <option value="location-1" title="Store Name Two">
                              Location 1
                            </option>
                            <option
                              value="location-2"
                              title="Store Name One OneOne"
                            >
                              Location 2
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form__wrap">
                  <div className="sort-box">
                    <div className="sort-box__line sort">
                      <div className="sort-box__select">
                        <span className="sort-box__arrow">
                          <strong>Invite</strong>
                          <img
                            src="../../images/icons/navigate_next-24px.svg"
                            alt="arrow"
                          />
                        </span>
                        <div className="form__single form__single--select form__single--select-default form__single--fluid">
                          <select
                            className="form__select form__select--default"
                            data-toggle="select-parent"
                          >
                            <option value="invite-1" title="Store Name Two">
                              Invite 1
                            </option>
                            <option
                              value="invite-2"
                              title="Store Name One OneOne"
                            >
                              Invite 2
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- modal-footer --> */}
              <div className="modal-footer w-100 d-flex align-items-center justify-content-center">
                <button className="btn-blue">Add to a timeline</button>
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

export default AddTimelinDashboard;
