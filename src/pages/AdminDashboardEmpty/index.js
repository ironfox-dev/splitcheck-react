import React, {useState, useEffect} from "react";
import AddTimelinDashboard from "../../components/Modals/AddTimelineDashboard";
import UserProfileMenu from "../../components/Modals/UserProfileMenu";
import GiveDiscount from "../../components/Modals/GiveDiscount";
import AddPhoto from "../../components/Modals/AddPhoto";
import {data} from "../../data/adminDashboardEmpty";

const AdminDashboardEmptyContent = ({isOpen}) => {
  const [isCard1Open, setIsCard1Open] = useState(false);
  const [isCard2Open, setIsCard2Open] = useState(false);
  const [isLotate, setIsLotate] = useState(false);
  const [isOption, setIsOption] = useState(false);
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
    return (
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
              <span>$ 0.00</span>
            </li>
            <li className="earning__info-item earning__info-item--orange d-flex align-items-center justify-content-between">
              <span>Paid to SplitChek</span>
              <span>$ 0.00</span>
            </li>
            <li className="earning__info-item earning__info-item--last d-flex align-items-center justify-content-between">
              <span>Total earned</span>
              <span>AUD $ 0.00</span>
            </li>
          </ul>

          <div
            className="earning__table earning__table--four earning__table--empty table position-relative d-flex flex-column"
            data-scroll="perfect-scrollbar"
          >
            <div className="sort-box">
              <div className="sort-box__line sort">
                <span className="sort-box__name">State:</span>
                <div className="sort-box__select">
                  <span className={`sort-box__arrow ${isOption && 'open'}`}>
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
            <div className="table__body position-relative">
              <div className="table__row d-flex align-items-center">
                <p>No data to display for this period</p>
                <figure className="table__img mb-0">
                  <img
                    src="../../images/dashboard/Data_report-bro.svg"
                    alt="img-table"
                  />
                </figure>
              </div>
            </div>
          </div>

          <div
            className="earning__table earning__table--three earning__table--empty table position-relative d-flex flex-column"
            data-scroll="perfect-scrollbar"
          >
            <div className="table__head d-flex align-items-center">
              <span>States</span>
              <span>Orders</span>
              <span>Total earned</span>
            </div>
            <div className="table__body position-relative">
              <div className="table__row d-flex align-items-center">
                <p>No data to display for this period</p>
                <figure className="table__img mb-0">
                  <img
                    src="../../images/dashboard/Financial_data-bro.svg"
                    alt="img-table"
                  />
                </figure>
              </div>
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
          <main className="main">
            <div className="toogle-box">
              <div className={`toogle-box__header ${isCard1Open && 'open'}`}>
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
                  <button className="arrow-open" onClick={() => setIsCard1Open(!isCard1Open)}>
                    <img src="images/icons/arrow__bottom.svg" alt="arrow" />
                  </button>
                </div>
              </div>
              <div className={`toogle-box__body ${isCard1Open && 'openBody'}`}>
                <div className="toogle-box__scroll pl-24 pr-20">
                </div>
              </div>
            </div>
            <div className="toogle-box">
              <div className={`toogle-box__header ${isCard2Open && 'open'}`}>
                <div className="toogle-box__header--left">
                  <h3>
                    shoppers messages (<span>0</span>)
                  </h3>
                </div>
                <div className="toogle-box__header--right">
                  <button className={`reset ${isLotate ? 'anim' : ''}`}>
                    <img src="images/icons/loop-24px.svg" alt="reset" onClick={() => setInterval(setIsLotate(!isLotate), 3000)}/>
                  </button>
                  <button className="arrow-open" onClick={() => setIsCard2Open(!isCard2Open)}>
                    <img src="images/icons/arrow__bottom.svg" alt="arrow" />
                  </button>
                </div>
              </div>
              <div className={`toogle-box__body ${isCard2Open && 'openBody'}`}>
                <div className="toogle-box__scroll pl-24 pr-20"></div>
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
                  {data[0].topCardsData.map((item, index) => (
                    <li className="statistic__item d-flex flex-column align-items-center justify-content-center" key={index}>
                    <span className="statistic-num">{item.num}</span>
                    <span className="statistic-text">{item.text}</span>
                  </li>
                  ))}
                </ul>
              </div>

              <div className="section-content__tiles d-flex align-items-center flex-wrap flex-column justify-content-between">
                <div className="statistic-box position-relative overflow-hidden">
                  <ul className="statistic-box__post w-100">
                    {data[1].list1Data.map((item, index) => (
                      <li key={index}>
                        <span>{item.text}</span>
                        <b>{item.num}</b>
                      </li>
                    ))}
                  </ul>
                  <div className="statistic-box__reaction w-100">
                    <h4>Reactions</h4>
                    <div className="statistic-box__emotion">
                      <ul>
                        {data[2].progressData.map((item, index) => (
                          <li>
                            <div className="progress" data-progress="0">
                              <div className="line blue"></div>
                            </div>
                            <i className={item.class}></i>
                            <span>{item.text}</span>
                            <strong>{item.num}</strong>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="main__card main__card--bias position-relative overflow-hidden">
                  <div className="internal-card internal-card--main w-100 d-flex align-items-start">
                    <div className="internal-card__info">
                      <h2>Grow your business</h2>
                      <p>
                        Shoppers want to get in touch with your business. Expose
                        your business using SplitChek's ads
                        <a href="#">...Read More</a>
                      </p>
                    </div>
                    <figure className="internal-card__img mb-0">
                      <img
                        src="images/dashboard/Influencer-bro.svg"
                        alt="card-img"
                      />
                    </figure>
                  </div>
                  <div className="main__buttons">
                    <a href="#" className="btn-border btn-border--two">
                      Promote store
                    </a>
                  </div>
                </div>

                <div className="main__card main__card--bias position-relative overflow-hidden">
                  <div className="internal-card internal-card--main w-100 d-flex align-items-start">
                    <div className="internal-card__info">
                      <h2>Be open to a people</h2>
                      <p>
                        Goss is here to help you with your business. Expose your
                        business using SplitChek's goss.
                        <a href="#">...Read More</a>
                      </p>
                    </div>
                    <figure className="internal-card__img mb-0">
                      <img
                        src="images/dashboard/Buffer-bro.svg"
                        alt="card-img"
                      />
                    </figure>
                  </div>
                  <div className="main__buttons">
                    <a href="#" className="btn-border btn-border--two">
                      Create a goss
                    </a>
                  </div>
                </div>
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
                    <li className="moments__item d-flex flex-column" key={index}>
                    <span className="moments__num">{item.num}</span>
                    <h2 className="moments__title text-orange">{item.title}</h2>
                    <p className="moments__text text-silver">
                      {item.text}
                    </p>
                  </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="section-content section-content--dashboard">
              <span className="section-content__title position-relative d-flex align-items-center">
                <span>what shoppers say about your store</span>
              </span>
              <div className="main__card main__card--fluid main__card--noshadow position-relative d-flex align-items-center justify-content-between flex-column overflow-hidden">
                <div className="internal-card d-flex align-items-center justify-content-center flex-column">
                  <figure className="internal-card__img mb-0">
                    <img src="images/home/buffer.svg" alt="card-img" />
                  </figure>
                  <div className="internal-card__info">
                    <h2>Nothing about you, yet</h2>
                  </div>
                </div>
                <div className="main__buttons">
                  <a href="#" className="btn-border btn-border--two">
                    Create a goss
                  </a>
                </div>
              </div>
            </section>
          </main>
          {/* <!-- /main --> */}
          {/* <!-- aside-right --> */}
          <aside className={`aside-right ${isAside ? 'd-none' : 'd-lg-block'}`}>
            {!isAside && onGetAside()}
          </aside>
          {/* <!-- /aside-right --> */}
        </div>
      </div>
      <AddTimelinDashboard />
      <GiveDiscount />
      <AddPhoto />
      <UserProfileMenu />
    </div>
  );
};

export default AdminDashboardEmptyContent;
