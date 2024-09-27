import React from "react";
import "./CSS/cart.css";
import crossbutton from "./images/Cart/png-transparent-x-button-exit-icon-symbol-sign.png";
const Cart = ({ cartItems, removeitem }) => {
  return (
    <div className="cart">
      <h2>Cart Items</h2>

      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <div className="cart-item">
          {cartItems.map((item, i) => (
            <div key={i} className="Item">
              <ul>
                <li>
                  <h3>Product</h3>
                  <img src={item.image} alt={item.name} />
                </li>
                <br />
                <br />
                <hr />
                <li>
                  <h3>Title</h3>
                  <p>{item.name}</p>
                </li>
                <hr />
                <li>
                  <h3>Old Price</h3>
                  <p style={{ textDecorationLine: "line-through" }}>
                    ${item.old_price}
                  </p>
                </li>
                <hr />
                <li>
                  <h3>New Price</h3>
                  <p>${item.new_price}</p>
                </li>
                <hr />
                <li>
                  <h3 onClick={() => removeitem(item)}>Remove</h3>
                  <br />
                  <img
                    className="crossbutton"
                    onClick={() => removeitem(item)}
                    src={crossbutton}
                    alt="cancel button "
                  />
                </li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
