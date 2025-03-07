import './Header.css';

/*
TODO: Improve the following Header component by:
 - Using landmark regions
 - Using the correct HTML elements for the different parts of the header
 - Adding the missing aria attributes
 - Adding the missing alt attributes if necessary
 - Adding mobile responsiveness
*/

export const Header = () => {
  return (
    <div className="header">
      <img className="logo" src="images/logo.webp" />
      <div className="nav">
        <a href="#" id="imprint-link">
          Imprint
        </a>
        <a href="#">Vernissage</a>
        <a href="#">Home</a>
      </div>
      <div className="search">
        <input />
        <img
          src="https://www.svgrepo.com/show/14071/search.svg"
          className="icon-button"
        />
      </div>
    </div>
  );
};
