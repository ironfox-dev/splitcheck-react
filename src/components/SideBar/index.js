import React, { useState } from "react";

const Sidebar = ({isHide, setIsHeader}) => {
  const [isOpen, setIsOpen]= useState(false);
  const [isList1Open, setIsList1Open] = useState(false);
  const [isList2Open, setIsList2Open] = useState(false);
  const [isList3Open, setIsList3Open] = useState(false);
  const [isList4Open, setIsList4Open] = useState(false);
  const [isList5Open, setIsList5Open] = useState(false);
  const [isList6Open, setIsList6Open] = useState(false);
  const [isList7Open, setIsList7Open] = useState(false);
  return (
    <div className={`admin-menu position-fixed ${isOpen && 'admin-menu--minimize'} ${ isHide ? 'sidebar-show' :  'sidebar-hide'}`}>
      <div className="admin-menu__header d-flex d-lg-none">
        <div className="admin-menu__close" onClick={() => setIsHeader(!isHide)}>
          <img src="/images/icons/close-blue.svg" alt="" />
        </div>
        <a className="admin-menu__logo" href="/home">
          <img
            className="admin-menu__img"
            src="images/icons/splitcheck-w-logo.png"
            alt="logo"
          />
          <span>Manage stores</span>
        </a>
      </div>
      <section className="section-content">
        <div className="admin-menu__nav position-relative">
          <button className="admin-menu__btn-minimize d-none d-lg-block" onClick={() => setIsOpen(!isOpen)}>
            <i className="icon icon-minimize"></i>
          </button>
          <div className="admin-menu__wrap position-relative">
            <div className="admin-menu__user-select d-flex d-lg-none">
              <div className="user-select">
                <div className="user-select__photo">
                  <div
                    style={{
                      backgroundImage: "url('images/message/img-1.png')",
                    }}
                  >
                    {" "}
                    <span>WD</span>
                  </div>
                </div>
                <span className="user-select__name">Genetix Nutrition</span>
                <div className="form__single form__single--select form__single--select-default form__single--fluid">
                  <select
                    className="form__select form__select--default"
                    data-toggle="select"
                  >
                    <option value="user-1" title="TS">
                      Terry Smith
                    </option>
                    <option value="user-1" title="TW">
                      Terry Will Green
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <ul className="admin-menu__list d-flex flex-column list-unstyled mb-0">
              <li className="admin-menu__item admin-menu__item--visit">
                <a href="#" className="admin-menu__link position-relative">
                  {/* <!-- add className "active" <i className="icon icon-gift"></i> what would the icon change --> */}
                  <i className="icon icon-dashboard"></i>
                  <span>Dashboard</span>
                </a>
              </li>
              <li className="admin-menu__item">
                <a href="#" className="admin-menu__link position-relative">
                  {/* <!-- add className "active" <i className="icon icon-gift"></i> what would the icon change --> */}
                  <i className="icon icon-notification"></i>
                  <span>
                    Alerts <b>(2)</b>
                  </span>
                </a>
              </li>
              <li className="admin-menu__item">
                <a href="#" className="admin-menu__link position-relative">
                  {/* <!-- add className "active" <i className="icon icon-gift"></i> what would the icon change --> */}
                  <i className="icon icon-messages"></i>
                  <span>Trading room</span>
                </a>
              </li>
              <li className={`admin-menu__item admin-menu__item--submenu ${isList1Open && 'js-open'}`}>
                <div className="admin-menu__title position-relative">
                  {/* <!-- add className "active" <i className="icon icon-gift"></i> what would the icon change --> */}
                  <i className="icon icon-shipping"></i>
                  <span>Orders</span>
                  <i className="icon icon-blue-arrow" onClick={() => setIsList1Open(!isList1Open)}></i>
                </div>

                <ul className={`admin-menu__list ${isList1Open ? "open" : ""}`}>
                  <li className="admin-menu__item">
                    <a href="#" className="admin-menu__link position-relative">
                      <span>View orders</span>
                    </a>
                  </li>
                  <li className="admin-menu__item">
                    <a href="#" className="admin-menu__link position-relative">
                      <span>Abandoned cart</span>
                    </a>
                  </li>
                  <li className="admin-menu__item">
                    <a href="#" className="admin-menu__link position-relative">
                      <span>Items in wishlist</span>
                    </a>
                  </li>
                  <li className="admin-menu__item">
                    <a href="#" className="admin-menu__link position-relative">
                      <span>Shop for your store</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className={`admin-menu__item admin-menu__item--submenu ${isList2Open && 'js-open'}`}>
                <div className="admin-menu__title position-relative">
                  {/* <!-- add className "active" <i className="icon icon-gift"></i> what would the icon change --> */}
                  <i className="icon icon-networking"></i>
                  <span>Networking</span>
                  <i className="icon icon-blue-arrow" onClick={() => setIsList2Open(!isList2Open)}></i>
                </div>

                <ul className={`admin-menu__list ${isList2Open ? "open" : ""}`}>
                  <li className="admin-menu__item">
                    <a href="#" className="admin-menu__link position-relative">
                      <span>View orders</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className={`admin-menu__item admin-menu__item--submenu ${isList3Open && 'js-open'}`}>
                <div className="admin-menu__title position-relative">
                  {/* <!-- add className "active" <i className="icon icon-gift"></i> what would the icon change --> */}
                  <i className="icon icon-social-media"></i>
                  <span>Posts</span>
                  <i className="icon icon-blue-arrow" onClick={() => setIsList3Open(!isList3Open)}></i>
                </div>

                <ul className={`admin-menu__list ${isList3Open ? "open" : ""}`}>
                  <li className="admin-menu__item">
                    <a href="#" className="admin-menu__link position-relative">
                      <span>View orders</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className={`admin-menu__item admin-menu__item--submenu ${isList4Open && 'js-open'}`}>
                <div className="admin-menu__title position-relative">
                  {/* <!-- add className "active" <i className="icon icon-gift"></i> what would the icon change --> */}
                  <i className="icon icon-landing-page"></i>
                  <span>Landing pages</span>
                  <i className="icon icon-blue-arrow" onClick={() => setIsList4Open(!isList4Open)}></i>
                </div>

                <ul className={`admin-menu__list ${isList4Open ? "open" : ""}`}>
                  <li className="admin-menu__item">
                    <a href="#" className="admin-menu__link position-relative">
                      <span>View orders</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className={`admin-menu__item admin-menu__item--submenu ${isList5Open && 'js-open'}`}>
                <div className="admin-menu__title position-relative">
                  {/* <!-- add className "active" <i className="icon icon-gift"></i> what would the icon change --> */}
                  <i className="icon icon-gift"></i>
                  <span>Products</span>
                  <i className="icon icon-blue-arrow" onClick={() => setIsList5Open(!isList5Open)}></i>
                </div>

                <ul className={`admin-menu__list ${isList5Open ? "open" : ""}`}>
                  <li className="admin-menu__item">
                    <a href="#" className="admin-menu__link position-relative">
                      <span>View orders</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className={`admin-menu__item admin-menu__item--submenu ${isList6Open && 'js-open'}`}>
                <div className="admin-menu__title position-relative">
                  {/* <!-- add className "active" <i className="icon icon-gift"></i> what would the icon change --> */}
                  <i className="icon icon-megaphone"></i>
                  <span>Marketing</span>
                  <i className="icon icon-blue-arrow" onClick={() => setIsList6Open(!isList6Open)}></i>
                </div>

                <ul className={`admin-menu__list ${isList6Open ? "open" : ""}`}>
                  <li className="admin-menu__item">
                    <a href="#" className="admin-menu__link position-relative">
                      <span>View orders</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className={`admin-menu__item admin-menu__item--submenu ${isList7Open && 'js-open'}`}>
                <div className="admin-menu__title position-relative">
                  {/* <!-- add className "active" <i className="icon icon-gift"></i> what would the icon change --> */}
                  <i className="icon icon-shop"></i>
                  <span>My stores</span>
                  <i className="icon icon-blue-arrow" onClick={() => setIsList7Open(!isList7Open)}></i>
                </div>

                <ul className={`admin-menu__list ${isList7Open ? "open" : ""}`}>
                  <li className="admin-menu__item">
                    <a href="#" className="admin-menu__link position-relative">
                      <span>View orders</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <div className="admin-menu__footer d-flex d-lg-none">
              <form action="#" className="form form-admin-menu">
                <div className="form__wrap">
                  <div className="form__single form__single--fluid form__single--checkbox form__single--checkbox-left">
                    <input
                      type="checkbox"
                      id="checkbox-alert-admin-menu"
                      className="form__checkbox form__checkbox--language"
                      name="checkbox-alert-admin-menu"
                      checked=""
                    />
                    <label for="checkbox-alert-admin-menu">
                      <b>Alert me when new messages arrive</b>
                    </label>
                  </div>
                  <div className="form__single form__single--fluid form__single--checkbox form__single--checkbox-left">
                    <input
                      type="checkbox"
                      id="checkbox-alert-admin-menu2"
                      className="form__checkbox form__checkbox--language"
                      name="checkbox-alert-admin-menu2"
                      checked=""
                    />
                    <label for="checkbox-alert-admin-menu2">
                      <b>Alert me when shopper visits my store</b>
                    </label>
                  </div>
                </div>
              </form>
            </div>
            <span className="d-block d-lg-none text-left admin-menu__copyright">
              All rights reserved SplitchChek 2020
            </span>
          </div>
        </div>
        <span className="admin-menu__copyright">
          All rights reserved SplitchChek 2020
        </span>
      </section>
    </div>
  );
};

export default Sidebar;