import React, {useContext} from "react";
import { Carousel, Button } from "antd";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import "./Home.css";

const carouselData = [
  {
    imageName: "image1",
    imageData: "Welcome To Cake & Bake",
  },
  {
    imageName: "image2",
    imageData: "We Bake With Passion",
  },
  {
    imageName: "image3",
    imageData: "Delicious Baked Goodness",
  },
];
const Home = () => {
  const { items, addToItemButton , cart, addItem, deleteItem, editItem} = useContext(Context);

  const checkoutHandler = () => {
    console.log("items: " , items);
    console.log("cart: ", cart);
  }

  return (
    <Carousel autoplay infinite>
      {carouselData.map((data, index) => (
        <div key={index} className={`carousel ${data.imageName}`}>
          <div className="carouselContainer">
            <div>{data.imageData}</div>
            <div className="buttons">
              <div>
                <Link to="/items">
                  <Button
                    type="primary"
                    shape="round"
                    size="large"
                    className="viewButton"
                  >
                    View Items
                  </Button>
                </Link>
              </div>
              <div>
              <Link to="/cart">
                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  className="viewButton"
                >
                  View Cart
                </Button>
              </Link>
              </div>
              <div>
                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  className="viewButton"
                  onClick={checkoutHandler}
                >
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Home;
