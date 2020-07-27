import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CheckOutSteps from "../CheckOutSteps";
import { Container } from "../../../styles/global/global";
import { SecondaryBtn } from "../../../styles/StyledUIElements/Button";

import "./PlaceOrder.css";

const PlaceOrder = props => {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const cart = useSelector(state => state.cart);
  const { cartItems, shipping, payment } = cart;

  if (!shipping) {
    props.history.push("/shipping");
  } else if (!payment) {
    props.history.push("/payment");
  }

  const itemsPrice = cartItems.reduce(
    (acc, val) => acc + val.price * val.qty,
    0,
  );

  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const taxAmount = 0.15 * itemsPrice;
  const totalPrice = itemsPrice + shippingPrice + taxAmount;

  const dispatch = useDispatch();

  const onOrderHandler = () => {};
  useEffect(() => {}, []);
  return (
    <>
      <Container>
        <CheckOutSteps step1 step2 step3 step4 />

        <div className="Place-order">
          <div className="Place-order__info">
            <div>
              <h3>Shipping</h3>
              <div>
                {cart.shipping.address}{" "}
                {cart.shipping.city ? "" : "No Shipping selected"}
                {cart.shipping.postalCode} {cart.shipping.country}
              </div>
            </div>

            <div>
              <ul className="Place-order__card--list-wrapper">
                <li></li>
                {cartItems.length === 0 ? (
                  <div>Order is empty</div>
                ) : (
                  cartItems.map(item => (
                    <section>
                      <div className="Place-order__inner">
                        <div className="Place-order__card">
                          <img src={item.imageUrl} alt="product" />
                        </div>
                        <div className="Place-order__card-name">
                          <div>{item.name}</div>
                          <div>Qty: {item.qty}</div>
                        </div>
                        <div className="Place-order__card-cart--price">
                          ${item.price}
                        </div>
                      </div>
                    </section>
                  ))
                )}
              </ul>
            </div>
          </div>

          {/* <div>
            <h3>Payment</h3>
            <div>Payment Method: {cart.payment.paymentMethod}</div>
          </div> */}

          <div className="Place-order__action">
            <ul>
              <li>
                <SecondaryBtn onClick={onOrderHandler}>Order</SecondaryBtn>
              </li>

              <li>
                <h3>Order Summary</h3>
              </li>

              <li>
                <div>Items</div>
                <div>{itemsPrice.toFixed(2)}</div>
              </li>

              <li>
                <div>Shipping</div>
                <div>{shippingPrice.toFixed(2)}</div>
              </li>

              <li>
                <div>Tax</div>
                <div>
                  {cartItems.length === 0 ? "0.00" : taxAmount.toFixed(2)}
                </div>
              </li>

              <li style={{ color: "red" }}>
                <div style={{ color: "red" }}>Order Total</div>
                <div style={{ borderTop: "1.5px solid green", width: "20%" }}>
                  {cartItems.length === 0 ? "0.00" : totalPrice.toFixed(2)}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PlaceOrder;
