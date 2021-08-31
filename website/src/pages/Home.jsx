import React from 'react';

const Dogs = () =>{
  return (
    <div>
  <div className="wrapper">
    <div className="content">
      <div className="bg-shape">
        <img src="https://tistory2.daumcdn.net/tistory/2980698/skin/images/pubg_PNG24.png" alt />
      </div>
      <div className="product-img">
        <div className="product-img__item" id="img1">
          <img src="https://tistory3.daumcdn.net/tistory/2980698/skin/images/Icon_equipment_Back_C_01.png" alt="battle ground" className="product-img__img" />
        </div>
        <div className="product-img__item" id="img2">
          <img src="https://tistory1.daumcdn.net/tistory/2980698/skin/images/179421_thumb.png" alt="battle ground" className="product-img__img" />
        </div>
        <div className="product-img__item" id="img3">
          <img src="https://tistory1.daumcdn.net/tistory/2980698/skin/images/item-3.png" alt="battle ground" className="product-img__img" />
        </div>
        <div className="product-img__item" id="img4">
          <img src="https://tistory1.daumcdn.net/tistory/2980698/skin/images/item-4.png" alt="battle ground" className="product-img__img" />
        </div>
      </div>
      <div className="product-slider">
        <button className="prev disabled">
          <span className="icon">
            <svg className="icon icon-arrow-right"><use xlinkHref="#icon-arrow-left" /></svg>
          </span>
        </button>
        <button className="next">
          <span className="icon">
            <svg className="icon icon-arrow-right"><use xlinkHref="#icon-arrow-right" /></svg>
          </span>
        </button>
        <div className="product-slider__wrp swiper-wrapper">
          <div className="product-slider__item swiper-slide" data-target="img4">
            <div className="product-slider__card">
              <img src="https://tistory3.daumcdn.net/tistory/2980698/skin/images/wp2208764.jpg" className="product-slider__cover" />
              <div className="product-slider__content">
                <h1 className="product-slider__title">
                  LEVEL 3 <br />
                  HELMET
                </h1>
                <span className="product-slider__price">$1.299,<sup>99</sup></span>
                <div className="product-ctr">
                  <div className="product-labels">
                    <div className="product-labels__title">HELMET SIZE</div>
                    <div className="product-labels__group">
                      <label className="product-labels__item">
                        <input type="radio" className="product-labels__checkbox" name="type5" />
                        <span className="product-labels__txt">S</span>
                      </label>
                      <label className="product-labels__item">
                        <input type="radio" className="product-labels__checkbox" name="type5" defaultChecked />
                        <span className="product-labels__txt">M</span>
                      </label>
                      <label className="product-labels__item">
                        <input type="radio" className="product-labels__checkbox" name="type5" />
                        <span className="product-labels__txt">L</span>
                      </label>
                      <label className="product-labels__item">
                        <input type="radio" className="product-labels__checkbox" name="type5" />
                        <span className="product-labels__txt">XL</span>
                      </label>
                    </div>
                  </div>
                  <span className="hr-vertical" />
                  <div className="product-inf">
                    <div className="product-inf__percent">
                      <div className="product-inf__percent-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 100 100">
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#0c1e2c" stopOpacity={0} />
                              <stop offset="100%" stopColor="#ee9f00" stopOpacity={1} />
                            </linearGradient>
                          </defs>
                          <circle cx={50} cy={50} r={47} strokeDasharray="240, 300" stroke="#ee9f00" strokeWidth={4} fill="none" />
                        </svg>
                      </div>
                      <div className="product-inf__percent-txt">
                        80%
                      </div>
                    </div>
                    <span className="product-inf__title">DURABILITY RATE</span>
                  </div>
                </div>
                <div className="product-slider__bottom">
                  <button className="product-slider__cart">
                    ADD TO CART
                  </button>
                  <button className="product-slider__fav js-fav"><span className="heart" /> ADD TO WISHLIST</button>
                </div>
              </div>
            </div>
          </div>
          <div className="product-slider__item swiper-slide" data-target="img1">
            <div className="product-slider__card">
              <img src="https://tistory3.daumcdn.net/tistory/2980698/skin/images/wp2208764.jpg" alt="battle ground" className="product-slider__cover" />
              <div className="product-slider__content">
                <h1 className="product-slider__title">
                  LEVEL 3 <br /> BACK PACK
                </h1>
                <span className="product-slider__price">$9.999,<sup>99</sup></span>
                <div className="product-ctr">
                  <div className="product-labels">
                    <div className="product-labels__title">BACKPACK STYLE</div>
                    <div className="product-labels__group">
                      <label className="product-labels__item">
                        <input type="radio" className="product-labels__checkbox" name="type1" defaultChecked />
                        <span className="product-labels__txt">BACKPACK</span>
                      </label>
                      <label className="product-labels__item">
                        <input type="radio" className="product-labels__checkbox" name="type1" />
                        <span className="product-labels__txt">SIDE BAG</span>
                      </label>
                    </div>
                  </div>
                  <span className="hr-vertical" />
                  <div className="product-inf">
                    <div className="product-inf__percent">
                      <div className="product-inf__percent-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 100 100">
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#0c1e2c" stopOpacity={0} />
                              <stop offset="100%" stopColor="#ee9f00" stopOpacity={1} />
                            </linearGradient>
                          </defs>
                          <circle cx={50} cy={50} r={47} strokeDasharray="225, 300" stroke="#ee9f00" strokeWidth={4} fill="none" />
                        </svg>
                      </div>
                      <div className="product-inf__percent-txt">
                        75%
                      </div>
                    </div>
                    <span className="product-inf__title">DURABILITY</span>
                  </div>
                </div>
                <div className="product-slider__bottom">
                  <button className="product-slider__cart">
                    ADD TO CART
                  </button>
                  <button className="product-slider__fav js-fav"><span className="heart" /> ADD TO WISHLIST</button>
                </div>
              </div>
            </div>
          </div>
          <div className="product-slider__item swiper-slide" data-target="img2">
            <div className="product-slider__card">
              <img src="https://tistory3.daumcdn.net/tistory/2980698/skin/images/wp2208764.jpg" alt="battle ground" className="product-slider__cover" />
              <div className="product-slider__content">
                <h1 className="product-slider__title">
                  PUBG <br /> frying pan
                </h1>
                <span className="product-slider__price">$1.699,<sup>99</sup></span>
                <div className="product-ctr">
                  <div className="product-labels">
                    <div className="product-labels__title">WRITTING</div>
                    <div className="product-labels__group">
                      <label className="product-labels__item">
                        <input type="radio" className="product-labels__checkbox" name="type3" defaultChecked />
                        <span className="product-labels__txt">PUBG <sup>DINNER</sup></span>
                      </label>
                      <label className="product-labels__item">
                        <input type="radio" className="product-labels__checkbox" name="type3" />
                        <span className="product-labels__txt">PUBG <sup>BATTLE GROUND</sup></span>
                      </label>
                    </div>
                    <div className="product-labels__title">LASER SIZE</div>
                    <div className="product-labels__group">
                      <label className="product-labels__item">
                        <input type="radio" className="product-labels__checkbox" name="type2" />
                        <span className="product-labels__txt">S</span>
                      </label>
                      <label className="product-labels__item">
                        <input type="radio" className="product-labels__checkbox" name="type2" defaultChecked />
                        <span className="product-labels__txt">M</span>
                      </label>
                      <label className="product-labels__item">
                        <input type="radio" className="product-labels__checkbox" name="type2" />
                        <span className="product-labels__txt">L</span>
                      </label>
                      <label className="product-labels__item">
                        <input type="radio" className="product-labels__checkbox" name="type2" />
                        <span className="product-labels__txt">XL</span>
                      </label>
                    </div>
                  </div>
                  <span className="hr-vertical" />
                  <div className="product-inf">
                    <div className="product-inf__percent">
                      <div className="product-inf__percent-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 100 100">
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#ee9f00" stopOpacity={0} />
                              <stop offset="100%" stopColor="#ee9f00" stopOpacity={1} />
                            </linearGradient>
                          </defs>
                          <circle cx={50} cy={50} r={47} strokeDasharray="240, 300" stroke="#ee9f00" strokeWidth={4} fill="none" />
                        </svg>
                      </div>
                      <div className="product-inf__percent-txt">
                        80%
                      </div>
                    </div>
                    <span className="product-inf__title">DURABILITY</span>
                  </div>
                </div>
                <div className="product-slider__bottom">
                  <button className="product-slider__cart">
                    ADD TO CART
                  </button>
                  <button className="product-slider__fav js-fav"><span className="heart" /> ADD TO WISHLIST</button>
                </div>
              </div>
            </div>
          </div>
          <div className="product-slider__item swiper-slide" data-target="img3">
            <div className="product-slider__card">
              <img src="https://tistory3.daumcdn.net/tistory/2980698/skin/images/wp2208764.jpg" alt="star wars" className="product-slider__cover" />
              <div className="product-slider__content">
                <h1 className="product-slider__title">
                  ASSAULT RIFLE <br />
                  FN SCAR
                </h1>
                <span className="product-slider__price">$9.999,<sup>99</sup></span>
                <div className="product-ctr">
                  <div className="product-labels">
                    <div className="product-labels__title">RIFLE VERSON</div>
                    <div className="product-labels__group">
                      <label className="product-labels__item">
                        <input type="radio" className="product-labels__checkbox" name="type6" defaultChecked />
                        <span className="product-labels__txt">16S</span>
                      </label>
                      <label className="product-labels__item">
                        <input type="radio" className="product-labels__checkbox" name="type6" />
                        <span className="product-labels__txt">17S</span>
                      </label>
                    </div>
                    <div className="product-labels__title">SHOOT TYPE</div>
                    <div className="product-labels__group">
                      <label className="product-labels__item">
                        <input type="radio" className="product-labels__checkbox" name="type7" defaultChecked />
                        <span className="product-labels__txt">Semi-automatic</span>
                      </label>
                      <label className="product-labels__item">
                        <input type="radio" className="product-labels__checkbox" name="type7" />
                        <span className="product-labels__txt">automatic</span>
                      </label>
                    </div>
                  </div>
                  <span className="hr-vertical" />
                  <div className="product-inf">
                    <div className="product-inf__percent">
                      <div className="product-inf__percent-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 100 100">
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#0c1e2c" stopOpacity={0} />
                              <stop offset="100%" stopColor="#ee9f00" stopOpacity={1} />
                            </linearGradient>
                          </defs>
                          <circle cx={50} cy={50} r={47} strokeDasharray="240, 300" stroke="#ee9f00" strokeWidth={4} fill="none" />
                        </svg>
                      </div>
                      <div className="product-inf__percent-txt">
                        80%
                      </div>
                    </div>
                    <span className="product-inf__title">DURABILITY RATE</span>
                  </div>
                </div>
                <div className="product-slider__bottom">
                  <button className="product-slider__cart">
                    ADD TO CART
                  </button>
                  <button className="product-slider__fav js-fav"><span className="heart" /> ADD TO WISHLIST</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <svg className="hidden" hidden>
    <symbol id="icon-arrow-left" viewBox="0 0 32 32">
      <path d="M0.704 17.696l9.856 9.856c0.896 0.896 2.432 0.896 3.328 0s0.896-2.432 0-3.328l-5.792-5.856h21.568c1.312 0 2.368-1.056 2.368-2.368s-1.056-2.368-2.368-2.368h-21.568l5.824-5.824c0.896-0.896 0.896-2.432 0-3.328-0.48-0.48-1.088-0.704-1.696-0.704s-1.216 0.224-1.696 0.704l-9.824 9.824c-0.448 0.448-0.704 1.056-0.704 1.696s0.224 1.248 0.704 1.696z" />
    </symbol>
    <symbol id="icon-arrow-right" viewBox="0 0 32 32">
      <path d="M31.296 14.336l-9.888-9.888c-0.896-0.896-2.432-0.896-3.328 0s-0.896 2.432 0 3.328l5.824 5.856h-21.536c-1.312 0-2.368 1.056-2.368 2.368s1.056 2.368 2.368 2.368h21.568l-5.856 5.824c-0.896 0.896-0.896 2.432 0 3.328 0.48 0.48 1.088 0.704 1.696 0.704s1.216-0.224 1.696-0.704l9.824-9.824c0.448-0.448 0.704-1.056 0.704-1.696s-0.224-1.248-0.704-1.664z" />
    </symbol>
  </svg>
</div>


  );
}
export default Dogs;