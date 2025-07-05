"use client";

import React, { createContext, useContext, useReducer, useEffect } from "react";

export interface Product {
  id: number;
  name: string;
  category: string;
  carModel: string;
  sku: string;
  brand: string;
  stock: number;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

type CartAction =
  | { type: "ADD_TO_CART"; product: Product }
  | { type: "REMOVE_FROM_CART"; productId: number }
  | { type: "UPDATE_QUANTITY"; productId: number; quantity: number }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; items: CartItem[] };

const CartContext = createContext<
  | {
      state: CartState;
      dispatch: React.Dispatch<CartAction>;
      addToCart: (product: Product) => void;
      removeFromCart: (productId: number) => void;
      updateQuantity: (productId: number, quantity: number) => void;
      clearCart: () => void;
      getCartTotal: () => number;
      generateWhatsAppMessage: () => string;
    }
  | undefined
>(undefined);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.items.find(
        (item) => item.id === action.product.id,
      );

      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
        return calculateTotals({ ...state, items: updatedItems });
      }

      const newItems = [...state.items, { ...action.product, quantity: 1 }];
      return calculateTotals({ ...state, items: newItems });
    }

    case "REMOVE_FROM_CART": {
      const newItems = state.items.filter(
        (item) => item.id !== action.productId,
      );
      return calculateTotals({ ...state, items: newItems });
    }

    case "UPDATE_QUANTITY": {
      if (action.quantity <= 0) {
        const newItems = state.items.filter(
          (item) => item.id !== action.productId,
        );
        return calculateTotals({ ...state, items: newItems });
      }

      const updatedItems = state.items.map((item) =>
        item.id === action.productId
          ? { ...item, quantity: action.quantity }
          : item,
      );
      return calculateTotals({ ...state, items: updatedItems });
    }

    case "CLEAR_CART":
      return { items: [], total: 0, itemCount: 0 };

    case "LOAD_CART":
      return calculateTotals({ ...state, items: action.items });

    default:
      return state;
  }
}

function calculateTotals(state: CartState): CartState {
  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  return { ...state, total, itemCount };
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0,
  });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: "LOAD_CART", items: parsedCart });
      } catch (error) {
        console.error("Error loading cart from localStorage:", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.items));
  }, [state.items]);

  const addToCart = (product: Product) => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  const removeFromCart = (productId: number) => {
    dispatch({ type: "REMOVE_FROM_CART", productId });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", productId, quantity });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const getCartTotal = () => state.total;

  const generateWhatsAppMessage = () => {
    const businessPhone = "+254700000000"; // Replace with actual business phone

    let message = "🛒 *New Order from Catron Auto Parts*\n\n";
    message += "📋 *Order Details:*\n";

    state.items.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   - SKU: ${item.sku}\n`;
      message += `   - Car Model: ${item.carModel}\n`;
      message += `   - Quantity: ${item.quantity}\n`;
      message += `   - Price: KES ${item.price.toLocaleString()} each\n`;
      message += `   - Subtotal: KES ${(item.price * item.quantity).toLocaleString()}\n\n`;
    });

    message += `💰 *Total Amount: KES ${state.total.toLocaleString()}*\n\n`;
    message += "📞 Please confirm availability and delivery details.\n";
    message += "Thank you for choosing Catron Auto Parts! 🚗";

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${businessPhone}?text=${encodedMessage}`;
  };

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        generateWhatsAppMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
