import React from "react";

const EditOptions = () => {
  return (
    <div
      className="modal fade modal-edit-option"
      tabindex="1"
      id="modal-edit-option"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content position-relative">
          {/* <!-- modal-header --> */}
          <div className="modal-header d-flex align-items-center">
            <h3>Edit options</h3>
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
            <div className="size-select" style="">
              <div className="size-select__list">
                <div className="size-select__single">
                  <div className="members__form">
                    <span className="form__note">Option 1</span>
                    <div className="form__single--select form__single--select-default form__single--fluid">
                      <div className="select-before">
                        <select
                          className="form__select form__select--default select2-hidden-accessible"
                          data-toggle="select"
                          tabindex="-1"
                          aria-hidden="true"
                          data-select2-id="111"
                        >
                          <option value="Size" data-select2-id="113">
                            Size
                          </option>
                          <option value="SizeTwo">SizeTwo</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="112"
                          style="width: 100%;"
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabindex="-1"
                              aria-disabled="false"
                              aria-labelledby="select2-nauw-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-nauw-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Size"
                              >
                                Size
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation"></b>
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          ></span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="members__form">
                    <span className="form__note">List of options</span>
                    <div className="form__single form__single--select form__single--select-tag form__single--fluid">
                      <select
                        className="form__input select2-hidden-accessible"
                        data-toggle="select-tag"
                        multiple=""
                        data-placeholder="Separate options with a coma"
                        tabindex="-1"
                        aria-hidden="true"
                        data-select2-id="30"
                      >
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                      </select>
                      <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="31"
                        style="width: 100%;"
                      >
                        <span className="selection">
                          <span
                            className="select2-selection select2-selection--multiple"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="-1"
                            aria-disabled="false"
                          >
                            <ul className="select2-selection__rendered">
                              <li className="select2-search select2-search--inline">
                                <input
                                  className="select2-search__field"
                                  type="search"
                                  tabindex="0"
                                  autocomplete="off"
                                  autocorrect="off"
                                  autocapitalize="none"
                                  spellcheck="false"
                                  role="searchbox"
                                  aria-autocomplete="list"
                                  placeholder="Separate options with a coma"
                                  style="width: 0px;"
                                />
                              </li>
                            </ul>
                          </span>
                        </span>
                        <span
                          className="dropdown-wrapper"
                          aria-hidden="true"
                        ></span>
                      </span>
                    </div>
                  </div>
                  <a href="#" className="size-select__remove">
                    <img src="../../images/icons/close-24px.svg" alt="close" />
                  </a>
                </div>
                <div className="size-select__single">
                  <div className="members__form">
                    <span className="form__note">Option 2</span>
                    <div className="form__single--select form__single--select-default form__single--fluid">
                      <div className="select-before">
                        <select
                          className="form__select form__select--default select2-hidden-accessible"
                          data-toggle="select"
                          tabindex="-1"
                          aria-hidden="true"
                          data-select2-id="114"
                        >
                          <option value="Size" data-select2-id="116">
                            Size
                          </option>
                          <option value="SizeTwo">SizeTwo</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="115"
                          style="width: 100%;"
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabindex="-1"
                              aria-disabled="false"
                              aria-labelledby="select2-qr58-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-qr58-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Size"
                              >
                                Size
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation"></b>
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          ></span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="members__form">
                    <span className="form__note">List of options</span>
                    <div className="form__single form__single--select form__single--select-tag form__single--fluid">
                      <select
                        className="form__input select2-hidden-accessible"
                        data-toggle="select-tag"
                        multiple=""
                        data-placeholder="Separate options with a coma"
                        tabindex="-1"
                        aria-hidden="true"
                        data-select2-id="37"
                      >
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                      </select>
                      <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="38"
                        style="width: 100%;"
                      >
                        <span className="selection">
                          <span
                            className="select2-selection select2-selection--multiple"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="-1"
                            aria-disabled="false"
                          >
                            <ul className="select2-selection__rendered">
                              <li className="select2-search select2-search--inline">
                                <input
                                  className="select2-search__field"
                                  type="search"
                                  tabindex="0"
                                  autocomplete="off"
                                  autocorrect="off"
                                  autocapitalize="none"
                                  spellcheck="false"
                                  role="searchbox"
                                  aria-autocomplete="list"
                                  placeholder="Separate options with a coma"
                                  style="width: 0px;"
                                />
                              </li>
                            </ul>
                          </span>
                        </span>
                        <span
                          className="dropdown-wrapper"
                          aria-hidden="true"
                        ></span>
                      </span>
                    </div>
                  </div>
                  <a href="#" className="size-select__remove">
                    <img src="../../images/icons/close-24px.svg" alt="close" />
                  </a>
                </div>
              </div>
              <a href="#" className="size-select__add">
                <span>
                  <img src="../../images/icons/plus-24px.svg" alt="add" />
                  Add option
                </span>
              </a>
            </div>
          </div>
          {/* <!-- /modal-body --> */}
          <div className="modal-footer d-flex flex-sm-row align-items-center justify-content-end">
            <a href="#" data-dismiss="modal" className="btn-border btn-border--two">
              Cancel
            </a>
            <a href="#" className="btn-blue" data-dismiss="modal">
              Done
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditOptions;
