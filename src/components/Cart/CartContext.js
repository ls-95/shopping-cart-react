import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedDelivery, setSelectedDelivery] = useState(() => {
    const saved = localStorage.getItem("selectedDelivery");
    return saved ? saved : "";
  });

  const [deliveryOption, setDeliveryOption] = useState(() => {
    const saved = localStorage.getItem("deliveryOption");
    return saved ? saved : "0";
  });

  const [total, setTotal] = useState(() => {
    const saved = localStorage.getItem("total");
    return saved ? parseFloat(saved) : 0;
  });

  const [promoCode, setPromoCode] = useState(() => {
    const saved = localStorage.getItem("promoCode");
    return saved ? JSON.parse(saved) : false;
  });

  const [deliveryOptionWord, setDeliveryOptionWord] = useState(() => {
    const saved = localStorage.getItem("deliveryOptionWord");
    return saved ? saved : "";
  });

  const [isChecked, setIsChecked] = useState(() => {
    const saved = localStorage.getItem("isChecked");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("selectedDelivery", selectedDelivery);
  }, [selectedDelivery]);

  useEffect(() => {
    localStorage.setItem("deliveryOption", deliveryOption);
  }, [deliveryOption]);

  useEffect(() => {
    localStorage.setItem("total", total.toString());
  }, [total]);

  useEffect(() => {
    localStorage.setItem("promoCode", JSON.stringify(promoCode));
  }, [promoCode]);

  useEffect(() => {
    localStorage.setItem("deliveryOptionWord", deliveryOptionWord);
  }, [deliveryOptionWord]);

  useEffect(() => {
    localStorage.setItem("isChecked", JSON.stringify(isChecked));
  }, [isChecked]);

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

  const clearCheckout = () => {
    setCartItems([]);
    setSelectedDelivery("");
    setDeliveryOption("0");
    setTotal(0);
    setPromoCode(false);
    setDeliveryOptionWord("");
    setIsChecked(false);

    localStorage.removeItem("cartItems");
    localStorage.removeItem("selectedDelivery");
    localStorage.removeItem("deliveryOption");
    localStorage.removeItem("total");
    localStorage.removeItem("promoCode");
    localStorage.removeItem("deliveryOptionWord");
    localStorage.removeItem("isChecked");
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
        total,
        setTotal,
        promoCode,
        setPromoCode,
        deliveryOptionWord,
        setDeliveryOptionWord,
        isChecked,
        setIsChecked,
        clearCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
