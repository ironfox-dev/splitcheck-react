import React from 'react';

const AdminAlertContent = () => {
	return(
		<div className="section-blur theme-background-one" data-class="blue" id="background">
    <div className="container container--admin">
      <div className="main-content position-relative d-flex align-items-start justify-content-between">
        {/* <!-- main --> */}
        <main className="main d-flex align-items-start flex-column flex-lg-row">

          <section className="section-content">
            <span className="section-content__title position-relative d-flex align-items-center">Reminders</span>

            <div className="reminders position-relative">
              <ul className="reminders__list list-unstyled mb-0">
                <li className="reminders__item">
                  <div className="card-alerts card-alerts--error w-100 position-relative d-flex flex-column">
                    <div className="card-alerts__body d-flex align-items-start">
                      <figure className="card-alerts__img" style={{backgroundImage: "url('images/profiles/img1.png')"}}>
                      </figure>
                      <div className="card-alerts__info card-alerts__info--fluid">
                        <h2 className="card-alerts__title">Payment is past due</h2>
                        <div className="card-alerts__detail d-flex flex-wrap">
                          <p>
                            Grow your business on SplitChek. <br />
                            Sell up to 100 products for free. Billed <b>$300.00</b>. Not received
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-alerts__bottom w-100 d-flex justify-content-end">
                      <a href="#" className="btn-blue-link">Edit payment details</a>
                    </div>
                    <button className="card-alerts__btn"></button>
                  </div>
                </li>
                <li className="reminders__item">
                  <div className="card-alerts card-alerts--error w-100 position-relative d-flex flex-column">
                    <span className="card-alerts__notif position-relative">Short in stock in store!</span>
                    <div className="card-alerts__body d-flex align-items-center">
                      <figure className="card-alerts__img"
                        style={{backgroundImage: "url('images/message/variant_42242.png')"}}></figure>
                      <div className="card-alerts__info">
                        <h2 className="card-alerts__title">Title here</h2>
                        <div className="card-alerts__detail d-flex flex-wrap">
                          <span>Sku:&nbsp;<span>#134567</span></span>
                          <span>Qty:&nbsp;<span>20</span></span>
                          <span>Price:&nbsp;<span>$49.99</span></span>
                        </div>
                      </div>
                      <div className="card-alerts__right">
                        <div className="card-alerts__reaction reaction d-flex justify-content-end align-items-center">
                          <ul className="reaction__list-icon reaction__list-icon--other list-unstyled mb-0">
                            <li className="reaction__item-icon">
                              <i className="icon icon-like"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-heart-l"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-happy"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-surprised"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-angry"></i>
                            </li>
                          </ul>
                          <span>56</span>
                        </div>
                        <div className="card-alerts__comments d-flex justify-content-end align-items-center">
                          <span>comments</span><span>56</span>
                        </div>
                      </div>
                    </div>
                    <button className="card-alerts__btn"></button>
                  </div>
                </li>
                <li className="reminders__item">
                  <div className="card-alerts card-alerts--canceled w-100 position-relative d-flex flex-column">
                    <span className="card-alerts__notif position-relative">Out of stock</span>
                    <div className="card-alerts__body d-flex align-items-center">
                      <figure className="card-alerts__img"
                        style={{backgroundImage: "url('images/message/variant_42242.png')"}}></figure>
                      <div className="card-alerts__info">
                        <h2 className="card-alerts__title">Title here could be so much longer so much longer so much
                          longer
                          so much longerso much longer</h2>
                        <div className="card-alerts__detail d-flex flex-wrap">
                          <span>Sku:&nbsp;<span>#134567</span></span>
                          <span>Qty:&nbsp;<span>20</span></span>
                          <span>Price:&nbsp;<span>$49.99</span></span>
                        </div>
                      </div>
                      <div className="card-alerts__right">
                        <div className="card-alerts__reaction reaction d-flex justify-content-end align-items-center">
                          <ul className="reaction__list-icon reaction__list-icon--other list-unstyled mb-0">
                            <li className="reaction__item-icon">
                              <i className="icon icon-like"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-heart-l"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-happy"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-surprised"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-angry"></i>
                            </li>
                          </ul>
                          <span>56</span>
                        </div>
                        <div className="card-alerts__comments d-flex justify-content-end align-items-center">
                          <span>comments</span><span>56</span>
                        </div>
                      </div>
                    </div>
                    <button className="card-alerts__btn"></button>
                  </div>
                </li>
                <li className="reminders__item">
                  <div className="card-alerts card-alerts--error w-100 position-relative d-flex flex-column">
                    <span className="card-alerts__notif position-relative">Short in stock in store!</span>
                    <div className="card-alerts__body d-flex align-items-center">
                      <figure className="card-alerts__img"
                        style={{backgroundImage: "url('images/message/variant_42242.png')"}}></figure>
                      <div className="card-alerts__info">
                        <h2 className="card-alerts__title">Title here</h2>
                        <div className="card-alerts__detail d-flex flex-wrap">
                          <span>Sku:&nbsp;<span>#134567</span></span>
                          <span>Qty:&nbsp;<span>20</span></span>
                          <span>Price:&nbsp;<span>$49.99</span></span>
                        </div>
                      </div>
                      <div className="card-alerts__right">
                        <div className="card-alerts__reaction reaction d-flex justify-content-end align-items-center">
                          <ul className="reaction__list-icon reaction__list-icon--other list-unstyled mb-0">
                            <li className="reaction__item-icon">
                              <i className="icon icon-like"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-heart-l"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-happy"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-surprised"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-angry"></i>
                            </li>
                          </ul>
                          <span>56</span>
                        </div>
                        <div className="card-alerts__comments d-flex justify-content-end align-items-center">
                          <span>comments</span><span>56</span>
                        </div>
                      </div>
                    </div>
                    <button className="card-alerts__btn"></button>
                  </div>
                </li>
                <li className="reminders__item">
                  <div className="card-alerts card-alerts--canceled w-100 position-relative d-flex flex-column">
                    <span className="card-alerts__notif position-relative">Out of stock</span>
                    <div className="card-alerts__body d-flex align-items-center">
                      <figure className="card-alerts__img"
                        style={{backgroundImage: "url('images/message/variant_42242.png')"}}></figure>
                      <div className="card-alerts__info">
                        <h2 className="card-alerts__title">Title here could be so much longer so much longer so much
                          longer
                          so much longerso much longer</h2>
                        <div className="card-alerts__detail d-flex flex-wrap">
                          <span>Sku:&nbsp;<span>#134567</span></span>
                          <span>Qty:&nbsp;<span>20</span></span>
                          <span>Price:&nbsp;<span>$49.99</span></span>
                        </div>
                      </div>
                      <div className="card-alerts__right">
                        <div className="card-alerts__reaction reaction d-flex justify-content-end align-items-center">
                          <ul className="reaction__list-icon reaction__list-icon--other list-unstyled mb-0">
                            <li className="reaction__item-icon">
                              <i className="icon icon-like"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-heart-l"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-happy"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-surprised"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-angry"></i>
                            </li>
                          </ul>
                          <span>56</span>
                        </div>
                        <div className="card-alerts__comments d-flex justify-content-end align-items-center">
                          <span>comments</span><span>56</span>
                        </div>
                      </div>
                    </div>
                    <button className="card-alerts__btn"></button>
                  </div>
                </li>
                <li className="reminders__item">
                  <div className="card-alerts card-alerts--error w-100 position-relative d-flex flex-column">
                    <span className="card-alerts__notif position-relative">Short in stock in store!</span>
                    <div className="card-alerts__body d-flex align-items-center">
                      <figure className="card-alerts__img"
                        style={{backgroundImage: "url('images/message/variant_42242.png')"}}></figure>
                      <div className="card-alerts__info">
                        <h2 className="card-alerts__title">Title here</h2>
                        <div className="card-alerts__detail d-flex flex-wrap">
                          <span>Sku:&nbsp;<span>#134567</span></span>
                          <span>Qty:&nbsp;<span>20</span></span>
                          <span>Price:&nbsp;<span>$49.99</span></span>
                        </div>
                      </div>
                      <div className="card-alerts__right">
                        <div className="card-alerts__reaction reaction d-flex justify-content-end align-items-center">
                          <ul className="reaction__list-icon reaction__list-icon--other list-unstyled mb-0">
                            <li className="reaction__item-icon">
                              <i className="icon icon-like"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-heart-l"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-happy"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-surprised"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-angry"></i>
                            </li>
                          </ul>
                          <span>56</span>
                        </div>
                        <div className="card-alerts__comments d-flex justify-content-end align-items-center">
                          <span>comments</span><span>56</span>
                        </div>
                      </div>
                    </div>
                    <button className="card-alerts__btn"></button>
                  </div>
                </li>
                <li className="reminders__item">
                  <div className="card-alerts card-alerts--canceled w-100 position-relative d-flex flex-column">
                    <span className="card-alerts__notif position-relative">Out of stock</span>
                    <div className="card-alerts__body d-flex align-items-center">
                      <figure className="card-alerts__img"
                        style={{backgroundImage: "url('images/message/variant_42242.png')"}}></figure>
                      <div className="card-alerts__info">
                        <h2 className="card-alerts__title">Title here could be so much longer so much longer so much
                          longer
                          so much longerso much longer</h2>
                        <div className="card-alerts__detail d-flex flex-wrap">
                          <span>Sku:&nbsp;<span>#134567</span></span>
                          <span>Qty:&nbsp;<span>20</span></span>
                          <span>Price:&nbsp;<span>$49.99</span></span>
                        </div>
                      </div>
                      <div className="card-alerts__right">
                        <div className="card-alerts__reaction reaction d-flex justify-content-end align-items-center">
                          <ul className="reaction__list-icon reaction__list-icon--other list-unstyled mb-0">
                            <li className="reaction__item-icon">
                              <i className="icon icon-like"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-heart-l"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-happy"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-surprised"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-angry"></i>
                            </li>
                          </ul>
                          <span>56</span>
                        </div>
                        <div className="card-alerts__comments d-flex justify-content-end align-items-center">
                          <span>comments</span><span>56</span>
                        </div>
                      </div>
                    </div>
                    <button className="card-alerts__btn"></button>
                  </div>
                </li>
                <li className="reminders__item">
                  <div className="card-alerts card-alerts--error w-100 position-relative d-flex flex-column">
                    <span className="card-alerts__notif position-relative">Short in stock in store!</span>
                    <div className="card-alerts__body d-flex align-items-center">
                      <figure className="card-alerts__img"
                        style={{backgroundImage: "url('images/message/variant_42242.png')"}}></figure>
                      <div className="card-alerts__info">
                        <h2 className="card-alerts__title">Title here</h2>
                        <div className="card-alerts__detail d-flex flex-wrap">
                          <span>Sku:&nbsp;<span>#134567</span></span>
                          <span>Qty:&nbsp;<span>20</span></span>
                          <span>Price:&nbsp;<span>$49.99</span></span>
                        </div>
                      </div>
                      <div className="card-alerts__right">
                        <div className="card-alerts__reaction reaction d-flex justify-content-end align-items-center">
                          <ul className="reaction__list-icon reaction__list-icon--other list-unstyled mb-0">
                            <li className="reaction__item-icon">
                              <i className="icon icon-like"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-heart-l"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-happy"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-surprised"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-angry"></i>
                            </li>
                          </ul>
                          <span>56</span>
                        </div>
                        <div className="card-alerts__comments d-flex justify-content-end align-items-center">
                          <span>comments</span><span>56</span>
                        </div>
                      </div>
                    </div>
                    <button className="card-alerts__btn"></button>
                  </div>
                </li>
                <li className="reminders__item">
                  <div className="card-alerts card-alerts--canceled w-100 position-relative d-flex flex-column">
                    <span className="card-alerts__notif position-relative">Out of stock</span>
                    <div className="card-alerts__body d-flex align-items-center">
                      <figure className="card-alerts__img"
                        style={{backgroundImage: "url('images/message/variant_42242.png')"}}></figure>
                      <div className="card-alerts__info">
                        <h2 className="card-alerts__title">Title here could be so much longer so much longer so much
                          longer
                          so much longerso much longer</h2>
                        <div className="card-alerts__detail d-flex flex-wrap">
                          <span>Sku:&nbsp;<span>#134567</span></span>
                          <span>Qty:&nbsp;<span>20</span></span>
                          <span>Price:&nbsp;<span>$49.99</span></span>
                        </div>
                      </div>
                      <div className="card-alerts__right">
                        <div className="card-alerts__reaction reaction d-flex justify-content-end align-items-center">
                          <ul className="reaction__list-icon reaction__list-icon--other list-unstyled mb-0">
                            <li className="reaction__item-icon">
                              <i className="icon icon-like"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-heart-l"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-happy"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-surprised"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-angry"></i>
                            </li>
                          </ul>
                          <span>56</span>
                        </div>
                        <div className="card-alerts__comments d-flex justify-content-end align-items-center">
                          <span>comments</span><span>56</span>
                        </div>
                      </div>
                    </div>
                    <button className="card-alerts__btn"></button>
                  </div>
                </li>
                <li className="reminders__item">
                  <div className="card-alerts card-alerts--error w-100 position-relative d-flex flex-column">
                    <span className="card-alerts__notif position-relative">Short in stock in store!</span>
                    <div className="card-alerts__body d-flex align-items-center">
                      <figure className="card-alerts__img"
                        style={{backgroundImage: "url('images/message/variant_42242.png')"}}></figure>
                      <div className="card-alerts__info">
                        <h2 className="card-alerts__title">Title here</h2>
                        <div className="card-alerts__detail d-flex flex-wrap">
                          <span>Sku:&nbsp;<span>#134567</span></span>
                          <span>Qty:&nbsp;<span>20</span></span>
                          <span>Price:&nbsp;<span>$49.99</span></span>
                        </div>
                      </div>
                      <div className="card-alerts__right">
                        <div className="card-alerts__reaction reaction d-flex justify-content-end align-items-center">
                          <ul className="reaction__list-icon reaction__list-icon--other list-unstyled mb-0">
                            <li className="reaction__item-icon">
                              <i className="icon icon-like"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-heart-l"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-happy"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-surprised"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-angry"></i>
                            </li>
                          </ul>
                          <span>56</span>
                        </div>
                        <div className="card-alerts__comments d-flex justify-content-end align-items-center">
                          <span>comments</span><span>56</span>
                        </div>
                      </div>
                    </div>
                    <button className="card-alerts__btn"></button>
                  </div>
                </li>
                <li className="reminders__item">
                  <div className="card-alerts card-alerts--canceled w-100 position-relative d-flex flex-column">
                    <span className="card-alerts__notif position-relative">Out of stock</span>
                    <div className="card-alerts__body d-flex align-items-center">
                      <figure className="card-alerts__img"
                        style={{backgroundImage: "url('images/message/variant_42242.png')"}}></figure>
                      <div className="card-alerts__info">
                        <h2 className="card-alerts__title">Title here could be so much longer so much longer so much
                          longer
                          so much longerso much longer</h2>
                        <div className="card-alerts__detail d-flex flex-wrap">
                          <span>Sku:&nbsp;<span>#134567</span></span>
                          <span>Qty:&nbsp;<span>20</span></span>
                          <span>Price:&nbsp;<span>$49.99</span></span>
                        </div>
                      </div>
                      <div className="card-alerts__right">
                        <div className="card-alerts__reaction reaction d-flex justify-content-end align-items-center">
                          <ul className="reaction__list-icon reaction__list-icon--other list-unstyled mb-0">
                            <li className="reaction__item-icon">
                              <i className="icon icon-like"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-heart-l"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-happy"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-surprised"></i>
                            </li>
                            <li className="reaction__item-icon">
                              <i className="icon icon-angry"></i>
                            </li>
                          </ul>
                          <span>56</span>
                        </div>
                        <div className="card-alerts__comments d-flex justify-content-end align-items-center">
                          <span>comments</span><span>56</span>
                        </div>
                      </div>
                    </div>
                    <button className="card-alerts__btn"></button>
                  </div>
                </li>
              </ul>
            </div>
          </section>


        </main>
        {/* <!-- /main --> */}
        <aside className="aside-right">
          <section className="section-content">
            <span className="section-content__title position-relative d-flex align-items-center">Requests & News</span>
            <div className="notification">
              <div className="notification__wrap position-relative" data-scroll="perfect-scrollbar">
                <div className="form__wrap notification__card">
                  <figure className="internal-card__avatar">
                    <img src="../../images/profiles/user-4.png" alt="avatar" />
                    <span className="internal-card__symbol"></span>
                  </figure>
                  <div className="notification__headline w-100">
                    <div className="notification__head">
                      <span><b>John Archer</b>&nbsp;requested to join&nbsp;<b>Your Group Name</b></span>
                    </div>
                    <div className="notification__link">
                      <a href="#">Reject</a><a href="#">Accept</a>
                    </div>
                  </div>
                  <div className="options">
                    <button type="button" className="options__btn" data-type="options">
                      <i className="icon icon-more"></i>
                    </button>

                    <div className="options__dropdown">
                      <ul className="list-unstyled mb-0">
                        <li><a href="#">Share</a></li>
                        <li><a href="#">Not gift worthy</a></li>
                        <li><a href="#">About the store</a></li>
                        <li><a href="#">Report abuse</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="form__wrap notification__card">
                  <figure className="internal-card__avatar">
                    <img src="../../images/profiles/img1.png" alt="avatar" />
                    <span className="internal-card__symbol"></span>
                  </figure>
                  <div className="notification__headline w-100">
                    <strong>Headline here could be longer one because we know </strong>
                    <p>Grow your business on SplitChek. Sell up to 100 products for free</p>
                    <div className="notification__link">
                      <a href="#">Cancel</a><a href="#">Get Started</a>
                    </div>
                  </div>
                  <div className="options">
                    <button type="button" className="options__btn" data-type="options">
                      <i className="icon icon-more"></i>
                    </button>

                    <div className="options__dropdown">
                      <ul className="list-unstyled mb-0">
                        <li><a href="#">Share</a></li>
                        <li><a href="#">Not gift worthy</a></li>
                        <li><a href="#">About the store</a></li>
                        <li><a href="#">Report abuse</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="form__wrap notification__card-video">
                  <div className="d-flex">
                    <figure className="internal-card__avatar">
                      <img src="../../images/profiles/img1.png" alt="avatar" />
                      <span className="internal-card__symbol"></span>
                    </figure>
                    <div className="notification__headline w-100">
                      <strong>Headline here </strong>
                      <p>Grow your business on SplitChek. Sell up to 100 products for free</p>

                    </div>
                    <div className="options">
                      <button type="button" className="options__btn" data-type="options">
                        <i className="icon icon-more"></i>
                      </button>

                      <div className="options__dropdown">
                        <ul className="list-unstyled mb-0">
                          <li><a href="#">Share</a></li>
                          <li><a href="#">Not gift worthy</a></li>
                          <li><a href="#">About the store</a></li>
                          <li><a href="#">Report abuse</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="notification__video">
                    <div
                      className="internal-card__grid internal-card__grid--single internal-card__grid--margin-bt grid-gallery d-flex flex-wrap">
                      <figure className="grid-gallery__width-1-1">
                        <a className="grid-gallery__selector position-relative grid-gallery__selector--video"
                          href="images/feed/feed-img1.jpg">
                          <div className="grid-gallery__post-img" style={{backgroundImage: "url('images/feed/feed-img1.jpg')"}}>
                          </div>
                        </a>
                      </figure>
                    </div>
                    <div className="notification__link">
                      <a href="#">Cancel</a><a href="#">Get Started</a>
                    </div>
                  </div>
                </div>

                <div className="form__wrap notification__card-video">
                  <div className="d-flex">
                    <figure className="internal-card__avatar">
                      <img src="../../images/profiles/img1.png" alt="avatar" />
                      <span className="internal-card__symbol"></span>
                    </figure>
                    <div className="notification__headline w-100">
                      <strong>Headline here </strong>
                      <p>Grow your business on SplitChek. Sell up to 100 products for free</p>

                    </div>
                    <div className="options">
                      <button type="button" className="options__btn" data-type="options">
                        <i className="icon icon-more"></i>
                      </button>

                      <div className="options__dropdown">
                        <ul className="list-unstyled mb-0">
                          <li><a href="#">Share</a></li>
                          <li><a href="#">Not gift worthy</a></li>
                          <li><a href="#">About the store</a></li>
                          <li><a href="#">Report abuse</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="notification__video">
                    <div
                      className="internal-card__grid internal-card__grid--single internal-card__grid--margin-bt grid-gallery d-flex flex-wrap">
                      <figure className="grid-gallery__width-1-1">
                        <a className="grid-gallery__selector position-relative grid-gallery__selector--video"
                          href="images/feed/feed-img1.jpg">
                          <div className="grid-gallery__post-img" style={{backgroundImage: "url('images/feed/feed-img1.jpg')"}}>
                          </div>
                        </a>
                      </figure>
                    </div>
                    <div className="notification__link">
                      <a href="#">Cancel</a><a href="#">Get Started</a>
                    </div>
                  </div>
                </div>

                <div className="form__wrap notification__card-figure">
                  <div className="d-flex">
                    <figure className="internal-card__avatar">
                      <img src="../../images/profiles/img1.png" alt="avatar" />
                      <span className="internal-card__symbol"></span>
                    </figure>
                    <div className="notification__headline w-100">
                      <strong>Headline here </strong>
                      <p>$49.99</p>

                    </div>
                    <div className="options">
                      <button type="button" className="options__btn" data-type="options">
                        <i className="icon icon-more"></i>
                      </button>

                      <div className="options__dropdown">
                        <ul className="list-unstyled mb-0">
                          <li><a href="#">Share</a></li>
                          <li><a href="#">Not gift worthy</a></li>
                          <li><a href="#">About the store</a></li>
                          <li><a href="#">Report abuse</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="notification__video">
                    <figure className="grid-gallery__width-1-1">
                      <a className="grid-gallery__selector" href="images/shop/product.jpg">
                        <div className="grid-gallery__post-img" style={{backgroundImage: "url('images/shop/product.jpg')"}}>
                        </div>
                      </a>
                    </figure>
                    <div className="d-flex justify-content-center">
                      <p>Genetix Nutrition products are devoloped by an internal research team assisted by
                        Grant Mayo to ensure the greatest quality and product </p>
                    </div>
                    <div className="notification__link">
                      <a href="#">Cancel</a><a href="#">View Product</a>
                    </div>
                  </div>
                </div>

                <div className="form__wrap notification__card-figure">
                  <div className="d-flex">
                    <figure className="internal-card__avatar">
                      <img src="../../images/profiles/img1.png" alt="avatar" />
                      <span className="internal-card__symbol"></span>
                    </figure>
                    <div className="notification__headline w-100">
                      <strong>Headline here </strong>
                      <p>$49.99</p>

                    </div>
                    <div className="options">
                      <button type="button" className="options__btn" data-type="options">
                        <i className="icon icon-more"></i>
                      </button>

                      <div className="options__dropdown">
                        <ul className="list-unstyled mb-0">
                          <li><a href="#">Share</a></li>
                          <li><a href="#">Not gift worthy</a></li>
                          <li><a href="#">About the store</a></li>
                          <li><a href="#">Report abuse</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="notification__video">
                    <figure className="grid-gallery__width-1-1">
                      <a className="grid-gallery__selector" href="images/shop/product.jpg">
                        <div className="grid-gallery__post-img" style={{backgroundImage: "url('images/shop/product.jpg')"}}>
                        </div>
                      </a>
                    </figure>
                    <div className="d-flex justify-content-center">
                      <p>Genetix Nutrition products are devoloped by an internal research team assisted by
                        Grant Mayo to ensure the greatest quality and product </p>
                    </div>
                    <div className="notification__gift">
                      <p>Perfect gift for:</p>
                      <div className="d-flex align-items-center flex-wrap">
                        <div
                          className="avatar avatar--no-img d-flex align-items-center justify-content-center overflow-hidden">
                          <img src="" alt="" />
                          <span className="avatar__symbol">JS</span>
                        </div>
                        <div
                          className="avatar avatar--no-img d-flex align-items-center justify-content-center overflow-hidden">
                          <img src="" alt="" />
                          <span className="avatar__symbol">JS</span>
                        </div>
                        <div
                          className="avatar avatar--no-img d-flex align-items-center justify-content-center overflow-hidden">
                          <img src="" alt="" />
                          <span className="avatar__symbol">JS</span>
                        </div>
                        <div
                          className="avatar avatar--no-img d-flex align-items-center justify-content-center overflow-hidden"
                          style={{backgroundColor: '#f8f9fb'}}>
                          <img src="" alt="" />
                          <span className="avatar__symbol"></span>
                        </div>
                      </div>
                    </div>
                    <div className="notification__link">
                      <a href="#">Cancel</a><a href="#">View Product</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  </div>
	)
}

export default AdminAlertContent;