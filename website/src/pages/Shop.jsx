
import React from 'react';
import rv1 from "../components/images/rv1.jpg";
import rv2 from "../components/images/rv2.jpg";
import rv3 from "../components/images/rv3.jpg";
import rv4 from "../components/images/rv4.jpg";
import rv5 from "../components/images/rv5.jpg";
import rv6 from "../components/images/rv6.jpg";
import rv7 from "../components/images/rv7.jpg";
import rv8 from "../components/images/rv8.jpg";

const Shop = () =>{
  return (
    <div>
     <div>
  <section className="section all-products" id="products">
    <div className="top container">
      <h1 className="title5">All Products</h1>
      <form>
        <select>
          <option value={1}>Default Sorting</option>
          <option value={2}>Sort By Price</option>
          <option value={3}>Sort By Popularity</option>
          <option value={4}>Sort By Sale</option>
          <option value={5}>Sort By Rating</option>
        </select>
        <span><i className="bx bx-chevron-down" /></span>
      </form>
    </div>
    <div className="product-center container">
      <div className="product">
        <div className="product-header">
          <img src={rv1} alt />
          <ul className="icons">
            <span><i className="bx bx-heart" /></span>
            <a href="cart.html"> <span><i className="bx bx-shopping-bag" /></span>
            </a>
            <span><i className="bx bx-search" /></span>
          </ul>
        </div>
        <div className="product-footer">
          
            <h3>2021 NEWMAR CANYON STAR 3722</h3>
          
          <div className="rating">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bx-star" />
          </div>
          <h4 className="price">
$276,125</h4>
        </div>
      </div>
      <div className="product">
        <div className="product-header">
          <img src={rv2} alt />
          <ul className="icons">
            <span><i className="bx bx-heart" /></span>
            <span><i className="bx bx-shopping-bag" /></span>
            <span><i className="bx bx-search" /></span>
          </ul>
        </div>
        <div className="product-footer">
          <h3>2018 NEWMAR BAY STAR SPORT 2812</h3>
          <div className="rating">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bx-star" />
          </div>
          <h4 className="price">
$114,995</h4>
        </div>
      </div>
      <div className="product">
        <div className="product-header">
          <img src={rv3} alt />
          <ul className="icons">
            <span><i className="bx bx-heart" /></span>
            <span><i className="bx bx-shopping-bag" /></span>
            <span><i className="bx bx-search" /></span>
          </ul>
        </div>
        <div className="product-footer">
          <h3>2017 WINNEBAGO FUSE 23T</h3>
          <div className="rating">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bx-star" />
            <i className="bx bx-star" />
          </div>
          <h4 className="price">
$88,995</h4>
        </div>
      </div>
      <div className="product">
        <div className="product-header">
          <img src={rv4} alt />
          <ul className="icons">
            <span><i className="bx bx-heart" /></span>
            <span><i className="bx bx-shopping-bag" /></span>
            <span><i className="bx bx-search" /></span>
          </ul>
        </div>
        <div className="product-footer">
          <h3>2022 NORTHWOOD ARCTIC FOX GRANDE RONDE 27-5L</h3>
          <div className="rating">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bx-star" />
          </div>
          <h4 className="price">
$79,271</h4>
        </div>
      </div>
      <div className="product">
        <div className="product-header">
          <img src={rv5} alt />
          <ul className="icons">
            <span><i className="bx bx-heart" /></span>
            <span><i className="bx bx-shopping-bag" /></span>
            <span><i className="bx bx-search" /></span>
          </ul>
        </div>
        <div className="product-footer">
          <h3>2022 COACHMEN CATALINA TRAIL BLAZER 28THS</h3>
          <div className="rating">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bx-star" />
            <i className="bx bx-star" />
            <i className="bx bx-star" />
          </div>
          <h4 className="price">
$56,606</h4>
        </div>
      </div>
      <div className="product">
        <div className="product-header">
          <img src={rv6} alt />
          <ul className="icons">
            <span><i className="bx bx-heart" /></span>
            <span><i className="bx bx-shopping-bag" /></span>
            <span><i className="bx bx-search" /></span>
          </ul>
        </div>
        <div className="product-footer">
          <h3>2022 KZ CONNECT SE C221FKKSE</h3>
          <div className="rating">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bx-star" />
            <i className="bx bx-star" />
            <i className="bx bx-star" />
          </div>
          <h4 className="price">
$47,791</h4>
        </div>
      </div>
      <div className="product">
        <div className="product-header">
          <img src={rv7} alt />
          <ul className="icons">
            <span><i className="bx bx-heart" /></span>
            <span><i className="bx bx-shopping-bag" /></span>
            <span><i className="bx bx-search" /></span>
          </ul>
        </div>
        <div className="product-footer">
          <h3>2022 THOR MOTOR COACH PALAZZO 33.5</h3>
          <div className="rating">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
          </div>
          <h4 className="price">
$281,850</h4>
        </div>
      </div>
      <div className="product">
        <div className="product-header">
          <img src={rv8} alt />
          <ul className="icons">
            <span><i className="bx bx-heart" /></span>
            <span><i className="bx bx-shopping-bag" /></span>
            <span><i className="bx bx-search" /></span>
          </ul>
        </div>
        <div className="product-footer">
          <h3>2021 COACHMEN SPORTSCOACH SRS 354QS</h3>
          <div className="rating">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
          </div>
          <h4 className="price">$272,063</h4>
        </div>
      </div>
    </div>
  </section>
  <section className="pagination">
    <div className=" container">
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span><i className="bx bx-right-arrow-alt" /></span>
    </div>
  </section>
</div>
     
    </div>
  );
}
export default Shop;