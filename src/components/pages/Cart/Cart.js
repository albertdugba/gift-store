import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addToCart, removeCart } from "../../../store/action/CartActions";
import { CustomContainer } from "../../../styles/global/global";
import {
  PrimaryBtn,
  SecondaryBtn,
} from "../../../styles/StyledUIElements/Button";
import "./Cart.css";

const Cart = props => {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();

  console.log(cartItems.length === 0);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

  const onRemove = productId => {
    dispatch(removeCart(productId));
  };

  const onCheckOut = () => {
    props.history.push("/login?redirect=shipping");
  };

  return (
    <>
      <div
        className="shopping-cart__total-price"
        style={{ textAlign: "right", padding: "1rem" }}
      >
        Total {cartItems.reduce((a, c) => a + c.price * c.qty, 0).toFixed(2)}
      </div>
      {cartItems.length === 0 ? (
        <CustomContainer style={{ textAlign: "center" }}>
          <img
            src="https://static05.jockey.in/uploads/images/img-no-cartitems.png"
            alt=""
            className="shopping--cart__not-found"
          />
          <h4>Hmmm, looks like there are no items in your cart</h4>
        </CustomContainer>
      ) : (
        cartItems.map(item => (
          <div key={item.product}>
            <div className="shopping-cart__container">
              <div className="shopping-cart__inner">
                <div className="shopping-cart__buttons">
                  <PrimaryBtn onClick={() => onRemove(item.product)}>
                    Remove
                  </PrimaryBtn>
                </div>
                <div className="shopping-cart__image">
                  <img src={item.imageUrl} alt={item.name} />
                </div>

                <span className="shopping-cart__description">
                  <Link to={`/product/${item.product}`}>
                    <div className="shopping-cart__description">
                      <span>{item.slug}</span>
                      <span>{item.name}</span>
                    </div>
                  </Link>
                </span>

                <div className="shopping-cart__quantity">
                  <select
                    value={qty}
                    onChange={e =>
                      dispatch(addToCart(item.product, e.target.value))
                    }
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">4</option>
                    <option value="3">5</option>
                    <option value="3">6</option>
                  </select>
                  {"  "} x ${item.price}
                </div>
              </div>
            </div>
          </div>
        ))
      )}

      <SecondaryBtn disabled={cartItems.length === 0} onClick={onCheckOut}>
        {cartItems.length === 0
          ? "No items in the cart"
          : "Proceed to checkout"}
      </SecondaryBtn>
    </>
  );
};

export default Cart;
