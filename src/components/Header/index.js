import React, { useState, } from "react";

const Header = ({isHeader, setIsHeader}) => {
  const [writng, setWriting] = useState('');

  return (
    <header className={`header header--dashboard ${isHeader && 'filter'}`}>
      <div className="header__content">
        <div className="header__left">
          <div className="header__dashboard-burger d-flex d-lg-none" onClick={() => setIsHeader(!isHeader)}>
            <img src="../../images/icons/burger-blue.svg" alt="" />
          </div>
          <a className="header__logo" href="/home">
            <img
              className="header__img"
              src="../../images/icons/splitcheck-w-logo.png"
              alt="logo"
            />
            <span className="d-none d-md-block">Manage stores</span>
          </a>
        </div>
        <div className="header__search">
          {/* <!-- form search -->
            <!-- add className: "search--active" --> */}
          <form action="#" id="search" className="search">
            <input
              type="search"
              name="search"
              className="search__input"
              placeholder="Search for something"
              id="search-input"
              autocomplete="off"
              onChange={(e) => setWriting(e.target.value)}
            />
            <button className="search__button" aria-label="search">
              <i className="icon icon-search"></i>
            </button>

            <div
              className={`search-dropdown search-dropdown__desctop ${writng && 'open'}`}
              data-scroll="perfect-scrollbar"
            >
              <div className="search-dropdown__hashtag">
                <span>Hashtags</span>
                <div className="search-dropdown__hashtag-item">
                  <b>#esomething</b>
                  <p>Some short headline there</p>
                </div>
                <div className="search-dropdown__hashtag-item">
                  <b>#esomething</b>
                  <p>Some short headline there</p>
                </div>
              </div>
              <div className="search-dropdown__product">
                <span>Products</span>
                <div className="search-dropdown__product-item">
                  <div className="abandoned-card__left">
                    <figure className="abandoned-card__img">
                      <img src="../../images/blog/bottle.png" alt="bottle" />
                    </figure>
                  </div>

                  <div className="abandoned-card__info">
                    <strong>
                      Short Title could be here; could even be a bit longer one
                    </strong>
                    <span>$45.00</span>
                  </div>
                </div>
                <div className="search-dropdown__product-item">
                  <div className="abandoned-card__left">
                    <figure className="abandoned-card__img">
                      <img src="../../images/blog/bottle.png" alt="bottle" />
                    </figure>
                  </div>
                  <div className="abandoned-card__info">
                    <strong>
                      Short Title could be here; could even be a bit longer one
                    </strong>
                    <span>$45.00</span>
                  </div>
                </div>
              </div>
              <div className="search-dropdown__popular">
                <span>Popular searches</span>
                <div className="search-dropdown__popular-item">
                  <p>
                    <b>e</b>nergy
                  </p>
                </div>
                <div className="search-dropdown__popular-item">
                  <p>
                    <b>e</b>chinacea
                  </p>
                </div>
                <div className="search-dropdown__popular-item">
                  <p>
                    <b>e</b>ndurance
                  </p>
                </div>
                <div className="search-dropdown__popular-img">
                  <img src="../../images/test-img/car.jpg" alt="" />
                  <strong>50% off on all goods!</strong>
                  <div className="search-dropdown__popular-info d-flex">
                    <p className="text-more">
                      To help your skin thrive, use Moroccan argan extract which
                      conditions and moisturiz
                    </p>
                    <a href="#" className="link-blue link-more">
                      …Read More
                    </a>
                  </div>
                  <div className="search-dropdown__popular-bottom">
                    <a href="#" className="btn-orange">
                      Snatch it!
                    </a>
                    <a href="#" className="link-blue">
                      Show all results (999)
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="search__result">
              <ul className="search__result-list">
                <li className="search__result-item d-flex align-items-center">
                  <p>
                    <b>pa</b>int
                  </p>
                </li>
              </ul>
            </div>
          </form>
        </div>
        <div className="header__right">
          <div className="header__admin">
            <a href="#" data-toggle="modal" data-target="#user-profile-menu">
              <span>AD</span>
            </a>
          </div>
          <div className="header__user-select">
            <div className="user-select">
              <div className="user-select__photo">
                <div style={{backgroundImage: "url('../../images/message/header-logo.png')"}}>
                  {" "}
                  <span>WD</span>
                </div>
              </div>
              <span className="user-select__name d-none d-lg-flex">
                Genetix Nutrition
              </span>
              <div className="form__single form__single--select form__single--select-default form__single--fluid">
                <select
                  className="form__select form__select--default"
                  data-toggle="select-user-account"
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
          <a href="#" className="d-none d-lg-flex btn-border btn-border--two">
            Promote store
          </a>
        </div>
        <div
          className={`search-dropdown search-dropdown__mobile ${writng && 'open'}`}
          data-scroll="perfect-scrollbar"
        >
          <div className="search-dropdown__hashtag">
            <div className="d-flex justify-content-between align-items-center">
              <span>Hashtags</span>
              <div className="search-dropdown__close">
                <img src="../../images/icons/close-blue.svg" alt="" />
              </div>
            </div>
            <div className="search-dropdown__hashtag-item">
              <b>#esomething</b>
              <p>Some short headline there</p>
            </div>
            <div className="search-dropdown__hashtag-item">
              <b>#esomething</b>
              <p>Some short headline there</p>
            </div>
          </div>
          <div className="search-dropdown__product">
            <span>Products</span>
            <div className="search-dropdown__product-item">
              <div className="abandoned-card__left">
                <figure className="abandoned-card__img">
                  <img src="../../images/blog/bottle.png" alt="bottle" />
                </figure>
              </div>
              <div className="abandoned-card__info">
                <strong>
                  Short Title could be here; could even be a bit longer one
                </strong>
                <span>$45.00</span>
              </div>
            </div>
            <div className="search-dropdown__product-item">
              <div className="abandoned-card__left">
                <figure className="abandoned-card__img">
                  <img src="../../images/blog/bottle.png" alt="bottle" />
                </figure>
              </div>
              <div className="abandoned-card__info">
                <strong>
                  Short Title could be here; could even be a bit longer one
                </strong>
                <span>$45.00</span>
              </div>
            </div>
          </div>
          <div className="search-dropdown__popular">
            <span>Popular searches</span>
            <div className="search-dropdown__popular-item">
              <p>
                <b>e</b>nergy
              </p>
            </div>
            <div className="search-dropdown__popular-item">
              <p>
                <b>e</b>chinacea
              </p>
            </div>
            <div className="search-dropdown__popular-item">
              <p>
                <b>e</b>ndurance
              </p>
            </div>
            <div className="search-dropdown__popular-img">
              <img src="../../images/test-img/car.jpg" alt="" />
              <strong>50% off on all goods!</strong>
              <div className="search-dropdown__popular-info d-flex">
                <p className="text-more">
                  To help your skin thrive, use Moroccan argan extract which
                  conditions and moisturiz
                </p>
                <a href="#" className="link-blue link-more">
                  …Read More
                </a>
              </div>
              <div className="search-dropdown__popular-bottom">
                <a href="#" className="btn-orange">
                  Snatch it!
                </a>
                <a href="#" className="link-blue">
                  Show all results (999)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;