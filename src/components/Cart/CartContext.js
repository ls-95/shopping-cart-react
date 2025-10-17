import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedDelivery, setSelectedDelivery] = useState("");
  const [deliveryOption, setDeliveryOption] = useState("0");

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      updateQuantity(item.id, existingItem.quantity + 1);
    } else {
      const itemWithQuantity = { ...item, quantity: 1 };
      setCartItems((prev) => [...prev, itemWithQuantity]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        totalQuantity,
        removeFromCart,
        updateQuantity,
        selectedDelivery,
        setSelectedDelivery,
        deliveryOption,
        setDeliveryOption,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
