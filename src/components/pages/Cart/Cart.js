import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../../../store/action/AddToCartActions";

import "./Cart.css";
import {
  PrimaryBtn,
  SecondaryBtn,
} from "../../../styles/StyledUIElements/Button";

const Cart = props => {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();

  console.log(cartItems);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

  return (
    <>
      {cartItems.length === 0 ? (
        <h1>No items in the cart</h1>
      ) : (
        cartItems.map(item => (
          <>
            <div key={item.product}>
              <div className="shopping-cart__container">
                <div className="shopping-cart__buttons">
                  <PrimaryBtn>Remove</PrimaryBtn>
                </div>
                <div className="shopping-cart__image">
                  <img src={item.imageUrl} alt={item.name} />
                </div>

                <div className="shopping-cart__description">
                  <span>{item.name}</span>
                  <span>{item.slug}</span>
                </div>

                <div className="shopping-cart__quantity">
                  Qty{" "}
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>

                <div className="shopping-cart__total-price">
                  Subtotal({cartItems.reduce((a, c) => a + c.qty, 0)} items): ${" "}
                  {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                </div>
              </div>
            </div>
          </>
        ))
      )}

      <SecondaryBtn disabled={cartItems.length === 0}>
        {cartItems.length === 0
          ? "No items in the cart"
          : "Proceed to checkout"}
      </SecondaryBtn>
    </>
  );
};

export default Cart;
