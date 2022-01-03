import React, { useEffect } from 'react';
import './styles.scss';
import { useStateCartItems } from '../../context';
import CartItem from '../CartItem';

function Cart() {
  const {
    itemCart, setItemCart, totalPrice, setTotalPrice,
  } = useStateCartItems();

  const totalTaxes = (0.0975 * totalPrice).toFixed(2);
  const grandTotal = ((0.0975 * totalPrice) + totalPrice).toFixed(2);

  const removeProduct = (item) => {
    const index = itemCart.findIndex(
      (p) => p.id === item.id,
    );
    if (index >= 0) {
      const a = itemCart.filter((p) => p.id !== item.id);
      setItemCart(a);
    }
  };

  function subTotalSum() {
    const total = setTotalPrice(
      itemCart.reduce(
        (sum, value) => (typeof value.quantity === 'number'
          ? sum + value.quantity * value.price
          : sum),
        0,
      ),
    );
    return total;
  }
  const handleMoreItems = (item) => {
    const index = itemCart.findIndex(
      (p) => p.id === item.id,
    );
    if (index >= 0) {
      itemCart[index].quantity += 1;
      subTotalSum();
      setItemCart(itemCart);
    }
  };

  const handleLessItems = (item) => {
    const index = itemCart.findIndex(
      (p) => p.id === item.id,
    );
    if (index >= 0) {
      if (itemCart[index].quantity === 1) {
        removeProduct(item);
        subTotalSum();
      } else {
        itemCart[index].quantity -= 1;
        subTotalSum();
        setItemCart(itemCart);
      }
    }
  };

  useEffect(() => {
    const totalCount = () => {
      subTotalSum();
    };
    totalCount();
  }, [handleMoreItems, handleLessItems]);

  return (
    <div className="cart-container">
      <h1 className="cart-container__title">Your Cart</h1>
      {itemCart.length === 0
        ? <h3 className="cart-container__subtitle">Your cart is empty </h3>
        : (
          <>
            <div className="cart-container__cart-list">
              {itemCart.map((e) => (
                <CartItem
                  key={e.id}
                  item={e}
                  handleMoreItems={handleMoreItems}
                  handleLessItems={handleLessItems}
                />
              ))}
            </div>
            <ul className="cart-totals">
              <li className="cart-totals__li">
                Subtotal:
                <span className="cart-totals__li--span">{`$${totalPrice.toFixed(2)}`}</span>
              </li>
              <li>
                Tax:
                <span className="cart-totals__li--span">
                  {`$${totalTaxes}`}
                </span>
              </li>
              <li>
                Total:
                <span className="cart-totals__li__total">
                  {`$${grandTotal}`}
                </span>
              </li>
            </ul>
          </>
        )}

    </div>
  );
}

export default Cart;
