import React from 'react';
import './styles.scss';
import { useStateCartItems } from '../../context';
import Product from '../Product';

function Menu() {
  const {
    itemCart, setItemCart, totalPrice, setTotalPrice,
  } = useStateCartItems();

  const products = [
    {
      id: 1,
      name: 'Bacon eggs',
      price: 4,
      img: 'https://i.ibb.co/XXjgD4Q/plate-bacon-eggs.png',
    },
    {
      id: 2,
      name: 'Chicken Salad',
      price: 3.5,
      img: 'https://i.ibb.co/jLt41yv/plate-chicken-salad.png',
    },
    {
      id: 3,
      name: 'Fish sticks fries',
      price: 6.3,
      img: 'https://i.ibb.co/JdTMg68/plate-fish-sticks-fries.png',
    },
    {
      id: 4,
      name: 'French fries',
      price: 2.5,
      img: 'https://i.ibb.co/99VY92b/plate-french-fries.png',
    },
    {
      id: 5,
      name: 'Ravioli',
      price: 5,
      img: 'https://i.ibb.co/t243nNC/plate-ravioli.png',
    },
    {
      id: 6,
      name: 'Salmon vegetables',
      price: 9.8,
      img: 'https://i.ibb.co/VQ6B6kL/plate-salmon-vegetables.png',
    },
    {
      id: 7,
      name: 'Spaghetti meat sauce',
      price: 4,
      img: 'https://i.ibb.co/R7JVbpm/plate-spaghetti-meat-sauce.png',
    },
    {
      id: 8,
      name: 'Tortellini',
      price: 7,
      img: 'https://i.ibb.co/7SKx0dC/plate-tortellini.png',
    },
  ];

  const handleAddItemToCart = (data) => {
    const currentProduct = itemCart.find((el) => el.id === data.id);

    if (currentProduct) {
      const others = itemCart.filter((el) => el.id !== data.id);
      setItemCart([{ ...data, quantity: currentProduct.quantity + 1 }, ...others]);
    } else {
      setItemCart([{ ...data, quantity: 1 }, ...itemCart]);
    }
    setTotalPrice(totalPrice + data.price);
  };

  return (
    <div className="menu-container">
      <h1 className="menu-container__title">To Go Menu</h1>
      <div className="menu-container__product-list">
        {products.map((e) => (
          <Product key={e.id} product={e} handleAddItemToCart={handleAddItemToCart} />))}
      </div>
    </div>
  );
}

export default Menu;
