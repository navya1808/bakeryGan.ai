import React, { useContext, useState } from "react";
import { Context } from "../Context";
import { Card, Button, Alert } from "antd";
import "./items.css";
import "./Cart.css";

const Cart = () => {
  const { items, addToItemButton , cart, addItem, deleteItem, editItem } = useContext(Context);
  const [deleteCartVisibility, setDeleteCartVisibility] = useState(false);

  const deleteItemHandler = (index) => {
    deleteItem(index);
    setDeleteCartVisibility(true);
    addToItemButton(index , false);
  };

  const onDecrease = (index, quantity) => {
    if (quantity == 1) {
      deleteItem(index);
      setDeleteCartVisibility(true);
    } else {
      editItem(index, "delete");
    }
  };

  const onIncrease = (index) => {
    editItem(index, "add");
  };

  const handleClose = () => {
    setDeleteCartVisibility(false);
  };

  return (
    <div className="cartList">
      {deleteCartVisibility && (
        <div className="al">
          <div className="alert">
            <Alert
              message="Item is successfully deleted from the cart!"
              type="success"
              closable
              afterClose={handleClose}
            />
          </div>
        </div>
      )}
      <div className="heading">Cart Items</div>
      <div className="list">
        <div className="itemCard">
          {cart.length > 0 &&
            cart.map((item, index) => (
              <div>
                <Card
                  hoverable
                  style={{ width: 300, backgroundColor: "#d4c5a9" }}
                  className="card"
                >
                  <div
                    className="itemImg"
                    style={{
                      backgroundImage: `url(${require(`../../images/${item.backImg}`)})`,
                      marginBottom: "10px",
                    }}
                  />
                  <div>{item.description}</div>
                  <div>{item.price}</div>
                  <br />
                  <div>
                    <Button.Group>
                      <Button
                        onClick={() => onDecrease(index, item.quantity)}
                        style={{
                          backgroundColor: "#325d88",
                          color: "white",
                          border: "1px solid #325d88",
                          fontWeight: "bold",
                        }}
                      >
                        -
                      </Button>
                      <Button
                        disabled
                        style={{
                          color: "black",
                          border: "1px solid #d4c5a9",
                          fontWeight: "bold",
                        }}
                      >
                        {item.quantity}
                      </Button>
                      <Button
                        onClick={() => onIncrease(index)}
                        style={{
                          backgroundColor: "#325d88",
                          color: "white",
                          border: "1px solid #325d88",
                          fontWeight: "bold",
                        }}
                      >
                        +
                      </Button>
                    </Button.Group>
                  </div>
                  <br />
                  <Button
                    type="primary"
                    shape="round"
                    size="large"
                    onClick={() => deleteItemHandler(index)}
                    className="btn"
                  >
                    Delete from Cart
                  </Button>
                </Card>
              </div>
            ))}
        </div>
        {cart.length == 0 && (
          <h1 className="empty"> Cart is empty! Add items to cart!!!</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
