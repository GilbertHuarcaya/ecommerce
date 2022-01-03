import React, {
  useMemo, useState, useContext, createContext,
} from 'react';
import PropTypes from 'prop-types';

const CartItem = createContext();

export function CartItemProvider({ children }) {
  const [itemCart, setItemCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const valuesToPass = useMemo(() => ({
    itemCart, setItemCart, totalPrice, setTotalPrice,
  }));

  return (
    <CartItem.Provider value={valuesToPass}>
      {children}
    </CartItem.Provider>
  );
}

export const useStateCartItems = () => {
  const context = useContext(CartItem);

  if (context === undefined) {
    throw new Error('error');
  }
  return context;
};

CartItemProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
