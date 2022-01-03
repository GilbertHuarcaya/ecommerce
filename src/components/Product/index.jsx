import React from 'react';
import PropTypes from 'prop-types';
import { useStateCartItems } from '../../context';
import Check from '../../images/check.svg';
import './styles.scss';

function Product({ product, handleAddItemToCart }) {
  const {
    itemCart,
  } = useStateCartItems();

  const productInCart = (products) => {
    const index = itemCart.findIndex(
      (p) => p.id === products.id,
    );
    if (index >= 0) {
      return itemCart[index].quantity !== 0;
    }
    return false;
  };
  return (
    <div className="product" id={`product-${product.id}`}>
      <img src={product.img} alt={product.name} className="product__image" />
      <div className="product__info-plate">
        <h2 className="product__info-plate--plate-name">
          {product.name}
        </h2>
        <h3 className="product__info-plate--price">
          {`$${product.price.toFixed(2)}`}
        </h3>
        {productInCart(product) ? (
          <button type="button" className="product__info-plate--addPlate--inCart" onClick={() => handleAddItemToCart(product)}>
            <img src={Check} alt="check" />
            In Cart
          </button>
        )
          : (<button type="button" className="product__info-plate--addPlate" onClick={() => handleAddItemToCart(product)}>Add to Cart</button>)}
      </div>
    </div>
  );
}

export default Product;

Product.propTypes = {
  product: PropTypes.objectOf(PropTypes.any),
  handleAddItemToCart: PropTypes.func.isRequired,
};

Product.defaultProps = {
  product: {},
};
