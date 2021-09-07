
import React from 'react';

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
          <img src="./images/pic1.jpg" alt />
          <ul className="icons">
            <span><i className="bx bx-heart" /></span>
            <a href="cart.html"> <span><i className="bx bx-shopping-bag" /></span>
            </a>
            <span><i className="bx bx-search" /></span>
          </ul>
        </div>
        <div className="product-footer">
          <a href="product-details.html">
            <h3>Boy’s T-Shirt</h3>
          </a>
          <div className="rating">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bx-star" />
          </div>
          <h4 className="price">$50</h4>
        </div>
      </div>
      <div className="product">
        <div className="product-header">
          <img src="./images/pic2.jpg" alt />
          <ul className="icons">
            <span><i className="bx bx-heart" /></span>
            <span><i className="bx bx-shopping-bag" /></span>
            <span><i className="bx bx-search" /></span>
          </ul>
        </div>
        <div className="product-footer">
          <h3>Boy’s T-Shirt</h3>
          <div className="rating">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bx-star" />
          </div>
          <h4 className="price">$50</h4>
        </div>
      </div>
      <div className="product">
        <div className="product-header">
          <img src="./images/pic3.jpg" alt />
          <ul className="icons">
            <span><i className="bx bx-heart" /></span>
            <span><i className="bx bx-shopping-bag" /></span>
            <span><i className="bx bx-search" /></span>
          </ul>
        </div>
        <div className="product-footer">
          <h3>Boy’s T-Shirt</h3>
          <div className="rating">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bx-star" />
          </div>
          <h4 className="price">$50</h4>
        </div>
      </div>
      <div className="product">
        <div className="product-header">
          <img src="./images/pic4.jpg" alt />
          <ul className="icons">
            <span><i className="bx bx-heart" /></span>
            <span><i className="bx bx-shopping-bag" /></span>
            <span><i className="bx bx-search" /></span>
          </ul>
        </div>
        <div className="product-footer">
          <h3>Boy’s T-Shirt</h3>
          <div className="rating">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bx-star" />
          </div>
          <h4 className="price">$50</h4>
        </div>
      </div>
      <div className="product">
        <div className="product-header">
          <img src="./images/pic3.jpg" alt />
          <ul className="icons">
            <span><i className="bx bx-heart" /></span>
            <span><i className="bx bx-shopping-bag" /></span>
            <span><i className="bx bx-search" /></span>
          </ul>
        </div>
        <div className="product-footer">
          <h3>Boy’s T-Shirt</h3>
          <div className="rating">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bx-star" />
          </div>
          <h4 className="price">$50</h4>
        </div>
      </div>
      <div className="product">
        <div className="product-header">
          <img src="./images/pic5.jpg" alt />
          <ul className="icons">
            <span><i className="bx bx-heart" /></span>
            <span><i className="bx bx-shopping-bag" /></span>
            <span><i className="bx bx-search" /></span>
          </ul>
        </div>
        <div className="product-footer">
          <h3>Boy’s T-Shirt</h3>
          <div className="rating">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bx-star" />
          </div>
          <h4 className="price">$50</h4>
        </div>
      </div>
      <div className="product">
        <div className="product-header">
          <img src="./images/pic2.jpg" alt />
          <ul className="icons">
            <span><i className="bx bx-heart" /></span>
            <span><i className="bx bx-shopping-bag" /></span>
            <span><i className="bx bx-search" /></span>
          </ul>
        </div>
        <div className="product-footer">
          <h3>Boy’s T-Shirt</h3>
          <div className="rating">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bx-star" />
          </div>
          <h4 className="price">$50</h4>
        </div>
      </div>
      <div className="product">
        <div className="product-header">
          <img src="./images/pic3.jpg" alt />
          <ul className="icons">
            <span><i className="bx bx-heart" /></span>
            <span><i className="bx bx-shopping-bag" /></span>
            <span><i className="bx bx-search" /></span>
          </ul>
        </div>
        <div className="product-footer">
          <h3>Boy’s T-Shirt</h3>
          <div className="rating">
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bx-star" />
          </div>
          <h4 className="price">$50</h4>
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