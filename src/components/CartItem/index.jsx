import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import chevron from '../../images/chevron.svg';

function ItemCart({ item, handleMoreItems, handleLessItems }) {
  return (
    <li>
      <div className="cart-item">
        <img className="cart-item__imagen" src={item.img} alt={item.name} />
        <div className="cart-item__info">
          <div className="cart-item__info__title">
            {item.name}
          </div>
          <div className="cart-item__info__unit-price">
            {`$${item.price.toFixed(2)}`}
          </div>
          <div className="cart-item__info__quantity-price">
            <div className="cart-item__info__quantity-price__quantity">
              <button type="button" className="cart-item__info__quantity-price__quantity--decrease" onClick={() => handleLessItems(item)}><img className="cart-item__info__quantity-price__quantity--decrease--imagen" src={chevron} alt="chevron" /></button>
              <span>
                {item.quantity}
              </span>
              <button type="button" className="cart-item__info__quantity-price__quantity--increase" onClick={() => handleMoreItems(item)}><img className="cart-item__info__quantity-price__quantity--increase--imagen" src={chevron} alt="chevron" /></button>
            </div>
            <div className="cart-item__info__quantity-price--price">
              {`$${(item.price * item.quantity).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ItemCart;

ItemCart.propTypes = {
  item: PropTypes.objectOf(PropTypes.any),
  handleMoreItems: PropTypes.func.isRequired,
  handleLessItems: PropTypes.func.isRequired,
};

ItemCart.defaultProps = {
  item: {},
};
