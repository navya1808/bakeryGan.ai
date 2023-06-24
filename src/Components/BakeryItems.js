import React, { useContext, useState } from "react";
import "./items.css";
import { Card, Button, Alert } from "antd";
import { Context } from "../Context";
import { Link } from "react-router-dom";

const BakeryItems = () => {
  const [addCartVisibility, setAddCartVisibility] = useState(false);

  const { items, addToItemButton , cart, addItem, deleteItem, editItem} = useContext(Context);

  const addItemHandler = (backImg, description, price, index) => {
    const newItem = { backImg, description, price, quantity: 1 };
    addItem(newItem);
    setAddCartVisibility(true);
    addToItemButton(index , true);
  };

  const handleClose = () => {
    setAddCartVisibility(false);
  };

  return (
    <div className="itemList">
      {addCartVisibility && (
        <div className="alert">
          <Alert
            message={
              <>
                Item is successfully added to the cart!{" "}
                <Link to="/cart">View Cart</Link>
              </>
            }
            type="success"
            closable
            afterClose={handleClose}
          />
        </div>
      )}
      <div className="heading">Menu Items</div>
      <div className="itemCard">
        {items.map((item, index) => (
          <div key={index}>
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
              <Button
                type="primary"
                shape="round"
                size="large"
                onClick={() =>
                  addItemHandler(
                    item.backImg,
                    item.description,
                    item.price,
                    index
                  )
                }
                className="btn"
                disabled={item.added}
              >
                {item.added ? "Added to the Cart" : "Add to Cart"} 
              </Button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BakeryItems;
