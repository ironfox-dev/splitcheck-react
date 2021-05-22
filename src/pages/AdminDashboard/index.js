import React, { useState, useEffect } from "react";
import AddTimelinDashboard from "../../components/Modals/AddTimelineDashboard";
import UserProfileMenu from "../../components/Modals/UserProfileMenu";
import AddPhoto from "../../components/Modals/AddPhoto";
import { data } from "../../data/adminDashboard";

const AdminDashboardContent = () => {
  const [isCard1Open, setIsCard1Open] = useState(false);
  const [isCard2Open, setIsCard2Open] = useState(false);
  const [isAside, setIsAside] = useState(false);
  const onResize = (e) => {
    if(e.target.innerWidth < 992 && !isAside) {
      setIsAside(true)
    } else if(e.target.innerWidth >= 992 && isAside) {
      setIsAside(false)
    }
  }
  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  });

  const onGetAside = () => {
    return(
      <section className="section-content">
        <span className="section-content__title position-relative d-flex align-items-center">
          Recent earning
        </span>
        {/* <!-- earning --> */}
        <div className="earning">
          <div className="earning__head d-flex flex-wrap align-items-end">
            <h2 className="earning__title text-dark-blue">Last 5 days</h2>
            <a href="#" className="earning__link">
              change period/range
            </a>
          </div>
          <ul
            className="earning__info-list position-relative d-flex flex-column align-items-start justify-content-center list-unstyled"
            data-scroll="perfect-scrollbar"
          >
            <li className="earning__info-item d-flex align-items-center justify-content-between">
              <span>Total sales</span>
              <span>$ 290 000.00</span>
            </li>
            <li className="earning__info-item earning__info-item--orange d-flex align-items-center justify-content-between">
              <span>Paid to SplitChek</span>
              <span>$ 2 500.00</span>
            </li>
            <li className="earning__info-item earning__info-item--last d-flex align-items-center justify-content-between">
              <span>Total earned</span>
              <span>AUD $ 287 500.00</span>
            </li>
          </ul>

          <div
            className="earning__table earning__table--four table position-relative d-flex flex-column"
            data-scroll="perfect-scrollbar"
          >
            <div className="sort-box">
              <div className="sort-box__line sort">
                <span className="sort-box__name">State:</span>
                <div className="sort-box__select">
                  <span className="sort-box__arrow">
                    <strong>QLD</strong>
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
                      <option value="qld" title="Store Name Two">
                        QLD
                      </option>
                      <option value="qld-2" title="Store Name One OneOne">
                        QLD two
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="table__head d-flex align-items-center">
              <span>Date</span>
              <span>Sales</span>
              <span>Paid to SC</span>
              <span>Total earned</span>
            </div>
            <div
              className="table__body position-relative"
              data-scroll="perfect-scrollbar"
            >
              {data[9].table1Data.map((item, index) => (
                <div
                  className="table__row d-flex align-items-center"
                  key={index}
                >
                  <span>{item.date}</span>
                  <span>{item.sales}</span>
                  <span className="text-orange">{item.paid}</span>
                  <span>{item.tEarned}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="earning__table earning__table--three table position-relative d-flex flex-column"
            data-scroll="perfect-scrollbar"
          >
            <div className="table__head d-flex align-items-center">
              <span>States</span>
              <span>Orders</span>
              <span>Total earned</span>
            </div>
            <div
              className="table__body position-relative"
              data-scroll="perfect-scrollbar"
            >
              {data[10].table2Data.map((item, index) => (
                <div
                  className="table__row d-flex align-items-center"
                  key={index}
                >
                  <span>{item.states}</span>
                  <span>{item.orders}</span>
                  <span>{item.tEarned}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <!-- /earning --> */}
      </section>
    )
  }

  return (
    <div
      className="section-blur theme-background-one"
      data-class="blue"
      id="background"
    >
      <div className="container container--admin">
        <div className="main-content position-relative d-flex align-items-start justify-content-between">
          {/* <!-- main --> */}
          <main className="main">
            <div className="toogle-box toogle-box--timeline">
              <div className={`toogle-box__header ${isCard1Open && "open"}`}>
                <div className="toogle-box__header--left">
                  <h3>My timeline</h3>
                </div>
                <a
                  href="#add-timeline-dashboard"
                  data-toggle="modal"
                  data-target="#add-timeline-dashboard"
                  className="new-item position-relative d-flex align-items-center justify-content-start"
                >
                  <span className="position-relative">
                    <i className="icon icon-plus-blue"></i>
                    Add to a timeline
                  </span>
                </a>
                <div className="toogle-box__header--right">
                  <button
                    className="arrow-open"
                    onClick={() => setIsCard1Open(!isCard1Open)}
                  >
                    <img
                      src="../../images/icons/arrow__bottom.svg"
                      alt="arrow"
                    />
                  </button>
                </div>
              </div>
              <div className={`toogle-box__body ${isCard1Open ? "open" : ""}`}>
                <section className="section-content">
                  <div
                    className="timeline-wrap-scrollbar position-relative"
                    data-scroll="perfect-scrollbar"
                  >
                    <div className="timeline position-relative">
                      <div className="timeline__line"></div>
                      <ul className="timeline__list d-flex flex-column list-unstyled mb-0">
                        <li className="timeline__item">
                          <span className="timeline__date timeline__date--active">
                            2:30 pm today
                          </span>
                          <article className="timeline__card card-timeline card-timeline--active card-timeline--visible-notification">
                            {/* <!-- notification --> */}
                            <div className="card-timeline__notification">
                              <i className="icon icon-bell-white"></i>
                              <span>Today is the big day!</span>
                            </div>
                            {/* <!-- card-inner --> */}
                            <div className="card-timeline__inner">
                              {/* <!-- card-header --> */}
                              <div className="card-timeline__header">
                                <div className="card-timeline__info card-timeline__info--main">
                                  <p>
                                    Lunch with friends in lorem ipsum dolor sit
                                    amet or something
                                  </p>
                                  <p>
                                    Budget:{" "}
                                    <span className="bold">$45 per person</span>
                                  </p>
                                </div>
                              </div>
                              {/* <!-- card-body --> */}
                              <div className="card-timeline__body">
                                <span className="card-timeline__title">
                                  Who is coming?
                                </span>
                                <div className="card-timeline__slider position-relative d-flex align-items-center">
                                  <div className="swiper-container">
                                    <div className="swiper-wrapper d-flex">
                                      {data[0].swiperWrapperdata.map(
                                        (item, index) => (
                                          <div
                                            className="swiper-slide"
                                            key={index}
                                          >
                                            <a
                                              href={item.href}
                                              className={item.class}
                                            >
                                              <img
                                                src={item.src}
                                                alt="avatar"
                                              />
                                              <span>{item.span}</span>
                                            </a>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                  <div className="swiper-button-prev"></div>
                                  <div className="swiper-button-next"></div>
                                </div>
                              </div>
                              {/* <!-- card-bottom --> */}
                              <div className="card-timeline__bottom">
                                <span className="card-timeline__title">
                                  Location
                                </span>
                                <div className="card-timeline__info">
                                  <p>4 Bellbird Cres, Coomera, QLD, 4209</p>
                                </div>
                              </div>

                              {/* <!-- option  add className: - options--open --> */}
                              <div className="options">
                                <button
                                  type="button"
                                  className="options__btn"
                                  data-type="options"
                                >
                                  <i className="icon icon-more"></i>
                                </button>

                                <div className="options__dropdown">
                                  <ul className="list-unstyled mb-0">
                                    {data[1].locationData.map((item, index) => (
                                      <li key={index}>
                                        <a href={item.href}>{item.text}</a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </article>
                        </li>
                        <li className="timeline__item">
                          <span className="timeline__date">
                            10:00 am Friday
                          </span>
                          <article className="timeline__card card-timeline">
                            {/* <!-- notification --> */}
                            <div className="card-timeline__notification">
                              <i className="icon icon-bell"></i>
                              <span></span>
                            </div>
                            {/* <!-- card-inner --> */}
                            <div className="card-timeline__inner">
                              {/* <!-- card-header --> */}
                              <div className="card-timeline__header">
                                <div className="card-timeline__info card-timeline__info--main">
                                  <p>
                                    Lunch with friends in lorem ipsum dolor sit
                                    amet or something
                                  </p>
                                  <p>
                                    Budget:{" "}
                                    <span className="bold">$45 per person</span>
                                  </p>
                                </div>
                              </div>
                              {/* <!-- option  add className: - options--open --> */}
                              <div className="options">
                                <button
                                  type="button"
                                  className="options__btn"
                                  data-type="options"
                                >
                                  <i className="icon icon-more"></i>
                                </button>

                                <div className="options__dropdown">
                                  <ul className="list-unstyled mb-0">
                                    {data[1].locationData.map((item, index) => (
                                      <li key={index}>
                                        <a href={item.href}>{item.text}</a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </article>
                        </li>
                        <li className="timeline__item">
                          <span className="timeline__date">
                            14:30 pm Friday
                          </span>
                          <article className="timeline__card card-timeline card-timeline--visible-notification">
                            {/* <!-- notification --> */}
                            <div className="card-timeline__notification">
                              <i className="icon icon-bell"></i>
                              <span></span>
                            </div>
                            {/* <!-- card-inner --> */}
                            <div className="card-timeline__inner">
                              {/* <!-- card-header --> */}
                              <div className="card-timeline__header">
                                <span className="card-timeline__title">
                                  <span>Added by:</span>
                                  <span className="bold">You</span>
                                </span>
                                <div className="card-timeline__info card-timeline__info--main">
                                  <p>
                                    Product name lorem ipsum dolor sit amet or
                                    something
                                  </p>
                                  <p>
                                    Budget:{" "}
                                    <span className="bold">$45 per person</span>
                                  </p>
                                </div>
                              </div>
                              {/* <!-- card-body --> */}
                              <div className="card-timeline__body">
                                <figure className="card-timeline__img mb-0">
                                  <img
                                    src="../../images/product/1.jpg"
                                    alt="product"
                                  />
                                </figure>
                              </div>
                              {/* <!-- card-bottom --> */}
                              <div className="card-timeline__bottom">
                                <span className="card-timeline__title">
                                  Comment
                                </span>
                                <div className="card-timeline__info">
                                  <p>I plan to buy it for my mum</p>
                                </div>
                              </div>
                              {/* <!-- option  add className: - options--open --> */}
                              <div className="options">
                                <button
                                  type="button"
                                  className="options__btn"
                                  data-type="options"
                                >
                                  <i className="icon icon-more"></i>
                                </button>

                                <div className="options__dropdown">
                                  <ul className="list-unstyled mb-0">
                                    {data[1].locationData.map((item, index) => (
                                      <li key={index}>
                                        <a href={item.href}>{item.text}</a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </article>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a href="#" className="btn-border">
                    Load more
                  </a>
                </section>
              </div>
            </div>
            <div className="toogle-box toogle-box--messages">
              <div className={`toogle-box__header ${isCard2Open && "open"}`}>
                <div className="toogle-box__header--left">
                  <h3>
                    shoppers messages (<span>4</span>)
                  </h3>
                </div>
                <div className="toogle-box__header--right">
                  <button className="reset">
                    <img src="../../images/icons/loop-24px.svg" alt="reset" />
                  </button>
                  <button
                    className="arrow-open"
                    onClick={() => setIsCard2Open(!isCard2Open)}
                  >
                    <img
                      src="../../images/icons/arrow__bottom.svg"
                      alt="arrow"
                    />
                  </button>
                </div>
              </div>
              <div className={`toogle-box__body ${isCard2Open ? "open" : ""}`}>
                <div
                  className="toogle-box__scroll pl-24 pr-20 position-relative"
                  data-scroll="perfect-scrollbar"
                >
                  <div className="message">
                    <section className="section-content">
                      {data[2].sectionData.map((item, index) => (
                        <div
                          className="message__single new__message d-flex w-100"
                          key={index}
                        >
                          <div className="message__body d-flex w-100 justify-content-between">
                            <div className="message__left d-flex align-items-center">
                              <div
                                className="message__photo"
                                style={{ backgroundImage: `${item.bgImg}` }}
                              ></div>
                              <div className="message__detail d-flex flex-column">
                                <strong>{item.title}</strong>
                                <span>{item.text}</span>
                              </div>
                            </div>
                            <div className="message__right d-flex flex-column">
                              <span className="message__date">{item.time}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </section>
                  </div>
                </div>
              </div>
            </div>
            <section className="section-aside-right-mob">
              {isAside && onGetAside()}
            </section>
            <section className="section-content section-content--dashboard">
              <span className="section-content__title position-relative d-flex align-items-center">
                Store statistic
              </span>
              <div className="statistic">
                <ul className="statistic__list d-flex flex-wrap align-items-center justify-content-between list-unstyled mb-0">
                  {data[4].list1Data.map((item, index) => (
                    <li
                      className="statistic__item d-flex flex-column align-items-center justify-content-center"
                      key={index}
                    >
                      <span className="statistic-num">{item.num}</span>
                      <span className="statistic-text">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="section-content__tiles d-flex align-items-center flex-wrap flex-column justify-content-between">
                <div className="statistic-box position-relative overflow-hidden">
                  <ul className="statistic-box__post w-100">
                    <li>
                      <span>reactions</span>
                      <ul className="reaction__list-icon reaction__list-icon--other list-unstyled mb-0">
                        {data[5].iconGroupData.map((item, index) => (
                          <li className="reaction__item-icon" key={index}>
                            <i className={item.class}></i>
                          </li>
                        ))}
                      </ul>
                      <b>437</b>
                    </li>
                    <li>
                      <span>comments</span> <b>65</b>
                    </li>
                    <li>
                      <span>added to timeline</span> <b>8</b>
                    </li>
                    <li>
                      <span>shared</span> <b>6</b>
                    </li>
                  </ul>
                  <div className="statistic-box__reaction w-100">
                    <h4>Reactions</h4>
                    <div className="statistic-box__emotion">
                      <ul>
                        {data[7].reactionsData.map((item, index) => (
                          <li key={index}>
                            <div
                              className="progress"
                              data-progress={item.progressNum}
                            >
                              <div className={item.class}></div>
                            </div>
                            <i className={item.iconClass}></i>
                            <span>{item.span}</span>
                            <strong>{item.strong}</strong>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {data[8].cardData.map((item, index) => (
                  <div
                    className="main__card main__card--bias position-relative overflow-hidden"
                    key={index}
                  >
                    <div className="internal-card internal-card--main w-100 d-flex align-items-start">
                      <div className="internal-card__info">
                        <h2>{item.title}</h2>
                        <p>
                          {item.text}
                          <a href="#">...Read More</a>
                        </p>
                      </div>
                      <figure className="internal-card__img mb-0">
                        <img src={item.src} alt="card-img" />
                      </figure>
                    </div>
                    <div className="main__buttons">
                      <a href="#" className="btn-border btn-border--two">
                        {item.btnTxt}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section className="section-content section-content--dashboard">
              <span className="section-content__title position-relative d-flex align-items-center">
                Social moments
              </span>
              <span className="section-content__title section-content__title--black text-dark-blue">
                SplitChek rewards you for being social and engaging to shoppers.
                Below are the results of your work:
              </span>
              <div className="moments">
                <ul className="moments__list d-flex flex-wrap align-items-start justify-content-between list-unstyled mb-0">
                  {data[3].momentData.map((item, index) => (
                    <li className="moments__item d-flex flex-column">
                      <span className="moments__num">{item.num}</span>
                      <h2 className="moments__title text-orange">
                        {item.title}
                      </h2>
                      <p className="moments__text text-silver">{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <section className="section-content section-content--dashboard">
              <span className="section-content__title position-relative d-flex align-items-center">
                <span>what shoppers say about your store</span>
              </span>

              <div className="main__card main__card--bias position-relative">
                <div className="internal-card internal-card--feed">
                  <div className="internal-card__header">
                    <a
                      href="#"
                      className="internal-card__profile d-flex flex-wrap align-items-start"
                    >
                      <figure className="internal-card__avatar internal-card__avatar--no-img">
                        <img
                          src="../../images/profiles/img1.png"
                          alt="avatar"
                        />
                        <span className="internal-card__symbol">ad</span>
                      </figure>
                      <div className="internal-card__head-info">
                        <h2 className="internal-card__name">Ann Doe</h2>
                        <p className="internal-card__subname">
                          <span>just for laugh goss</span>
                          <span className="internal-card__date">
                            02.10.2020
                          </span>
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="internal-card__body">
                    <strong>Goss title</strong>
                    <p>
                      To help your skin thrive, use Moroccan argan extract which
                      conditions and moisturizes while chlorella brings a boost
                      of skin-benefiting vitamins and omega 3s for extra glowing
                      goodness
                    </p>
                  </div>
                  <div className="internal-card__bottom">
                    <div className="reaction">
                      <div className="reaction__top">
                        <div className="reaction__quantity">
                          <ul className="reaction__list-icon reaction__list-icon--other list-unstyled mb-0">
                            {data[5].iconGroupData.map((item, index) => (
                              <li className="reaction__item-icon" key={index}>
                                <i className={item.class}></i>
                              </li>
                            ))}
                          </ul>
                          <div className="reaction__pop">
                            <ul className="smile">
                              {data[6].smileIconsData.map((item, index) => (
                                <li key={index}>
                                  <i className={item.class}></i>
                                  <span>{item.text}</span>
                                  <span>{item.num}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <span>56</span>
                        </div>
                        <span className="reaction__text">0 comments</span>
                      </div>
                      <div className="reaction__bottom">
                        <div className="reaction__wrap-link reaction__wrap-link--reaction">
                          <i className="icon icon-like-blue"></i>
                          <span>like</span>
                          <div className="reaction-btn-like reaction-btn-like--feed">
                            <ul className="reaction-btn-like__list list-unstyled mb-0">
                              {data[5].iconGroupData.map((item, index) => (
                                <li
                                  className="reaction-btn-like__item"
                                  key={index}
                                >
                                  <a
                                    href={item.href}
                                    className="reaction-btn-like__link"
                                  >
                                    <i className={item.class}></i>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="reaction__wrap-link">
                          <a href="#" className="reaction__link">
                            <i className="icon icon-comment"></i>
                            <span>comment</span>
                          </a>
                        </div>
                        <div className="reaction__wrap-link">
                          <a href="#" className="reaction__link">
                            <i className="icon icon-plus-blue"></i>
                            <span>add to timeline</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- option  add className: - options--open --> */}
                  <div className="options">
                    <button
                      type="button"
                      className="options__btn"
                      data-type="options"
                    >
                      <i className="icon icon-more"></i>
                    </button>
                    <div className="options__dropdown">
                      <ul className="list-unstyled mb-0">
                        {data[1].locationData.map((item, index) => (
                          <li key={index}>
                            <a href={item.href}>{item.text}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          {/* <!-- /main --> */}
          <aside className={`aside-right ${isAside ? 'd-none' : 'd-lg-block'}`}>
            {!isAside && onGetAside()}
          </aside>
        </div>
      </div>
      <AddTimelinDashboard />
      <AddPhoto />
      <UserProfileMenu />
    </div>
  );
};

export default AdminDashboardContent;
