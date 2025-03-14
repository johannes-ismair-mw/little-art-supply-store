import './ProductSection.css';

/*
TODO: Improve the following ProductSection component by:
 - Using landmark regions
 - Using the correct HTML elements for the different parts of the section
 - Thinking about the accessibility of the radio buttons
 - Adding alt attributes to the images if necessary
 - Thinking about responsive design
 - Changing fonts and colors to improve readability and color contrasts
 - Adding responsive styles
*/

export const ProductSection = () => {
  return (
    <>
      <p className="explanation">
        Filter by category on the left side or search a specific product on the
        top right corner.
      </p>
      <div className="layout">
        <div className="sidenav">
          <button className="category">Acrylic Paints</button>
          <button className="category">Oil Paints</button>
          <button className="category">Water Colors</button>
          <button className="category">Spray Cans</button>
          <img
            id="shopping-cart-button"
            className="shopping-cart icon-button"
            src="https://www.svgrepo.com/show/16229/shopping-cart.svg"
          />
          <button className="reset-button">Reset Shopping Cart</button>
        </div>

        <div className="cards-container">
          <div className="card">
            <img
              src="images/product1.webp"
              alt="oil, paint, art, shop, painting, brush, color, colour, palette, price, tube, container, colorful, artist, supply, present, voucher, can, spray, acrylic, texture, quality, drawing, portrait, landscape, modern, abstract, classic"
            />
            <p className="card-title">Oil Paint Standard</p>
            <h1 title="Discounts may apply">5€</h1>
            <div className="colors">
              <label htmlFor="radio-red" className="radio-container red">
                <input id="radio-red" type="radio" value="1" name="color" />
                <span className="checkmark"></span>
              </label>
              <label htmlFor="radio-green" className="radio-container green">
                <input id="radio-green" type="radio" value="2" name="color" />
                <span className="checkmark"></span>
              </label>
              <label htmlFor="radio-blue" className="radio-container blue">
                <input id="radio-blue" type="radio" value="3" name="color" />
                <span className="checkmark"></span>
              </label>
              <label htmlFor="radio-yellow" className="radio-container yellow">
                <input id="radio-yellow" type="radio" value="4" name="color" />
                <span className="checkmark"></span>
              </label>
            </div>
            <a className="button">Buy</a>
          </div>
          <div className="card">
            <img src="images/product2.webp" />
            <p className="card-title">Oil Paint Deluxe</p>
            <h1 title="Discounts may apply">30€</h1>
            <div className="colors">
              <label htmlFor="radio-pink" className="radio-container pink">
                <input id="radio-pink" type="radio" value="1" name="color" />
                <span className="checkmark"></span>
              </label>
              <label htmlFor="radio-purple" className="radio-container purple">
                <input id="radio-purple" type="radio" value="2" name="color" />
                <span className="checkmark"></span>
              </label>
            </div>
            <a className="button">Buy</a>
          </div>
          <div className="card">
            <span className="discount">-25%</span>
            <img src="images/product3.jpg" />
            <p className="card-title">Oil Paint Premium</p>
            <div className="discounted">
              <h1 title="Discounts may apply">25€</h1> <span>30€</span>
            </div>
            <div className="colors">
              <label htmlFor="radio-blue" className="radio-container blue">
                <input id="radio-blue" type="radio" value="1" name="color" />
                <span className="checkmark"></span>
              </label>
              <label
                htmlFor="radio-turquoise"
                className="radio-container turquoise"
              >
                <input
                  id="radio-turquoise"
                  type="radio"
                  value="2"
                  name="color"
                />
                <span className="checkmark"></span>
              </label>
            </div>
            <a className="button">Buy</a>
          </div>
          <div className="card">
            <img src="images/product4.jpg" />
            <p className="card-title">Oil Paint Mono Special</p>
            <h1 title="Discounts may apply">20€</h1>
            <div className="placeholder"></div>
            <a className="button">Buy</a>
          </div>
          <div className="card">
            <img src="images/product5.jpg" />
            <p className="card-title">Oil Paint Set of 3</p>
            <h1 title="Discounts may apply">30€</h1>
            <div className="placeholder"></div>
            <a className="button">Buy</a>
          </div>
          <div className="card">
            <img src="images/product6.jpg" />
            <p className="card-title">Oil Paint Set of 5</p>
            <h1 title="Discounts may apply">50€</h1>
            <div className="placeholder"></div>
            <a className="button">Buy</a>
          </div>
          <div className="card">
            <img src="images/product6.jpg" />
            <p className="card-title">Oil Paint Set of 10</p>
            <h1 title="Discounts may apply">100€</h1>
            <div className="placeholder"></div>
            <a className="button">Buy</a>
          </div>
          <div className="card">
            <img src="images/product7.jpg" />
            <p className="card-title">Oil Paint Set of 18</p>
            <h1 title="Discounts may apply">180€</h1>
            <div className="placeholder"></div>
            <a className="button">Buy</a>
          </div>
          <div className="card">
            <img src="images/product8.jpg" />
            <p className="card-title">Oil Paint Set of 30</p>
            <h1 title="Discounts may apply">300€</h1>
            <div className="placeholder"></div>
            <a className="button">Buy</a>
          </div>
        </div>
      </div>
    </>
  );
};
