import React , {useState}from "react";

const Context = React.createContext();

const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [items , setItems] = useState([
    {
      backImg: "item1.jpg",
      description: "Red Velvet Cake",
      price: "Rs. 600 / Kg",
      added: false
    },
    {
      backImg: "item2.webp",
      description: "Chocolate Cake",
      price: "Rs. 500 / Kg",
      added: false
    },
    {
      backImg: "item3.webp",
      description: "Vanilla Cake",
      price: "Rs. 400 / Kg",
      added: false
    },
    {
      backImg: "item4.webp",
      description: "Blue Berry Cake",
      price: "Rs. 550 / Kg",
      added: false
    },
  ]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const editItem = (index, operation) => {
    const updatedCart = cart.map((item, i) => {
      if (i === index && operation === "add") {
        return { ...item, quantity: ++item.quantity };
      } else if (i === index && operation === "delete") {
        return { ...item, quantity: --item.quantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const deleteItem = (index) => {
    const newItem = cart.filter((_, i) => i !== index);
    setCart(newItem);
  };

  const addToItemButton = (index , val) => {
    const updatedItem = items.map((item, i) => {
      if (i === index) {
        return { ...item, added : val};
      } 
      return item;
    });
    setItems(updatedItem);
  }

  return (
    <Context.Provider value={{ items, addToItemButton , cart, addItem, deleteItem, editItem }}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
