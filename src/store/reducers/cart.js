import { CART_TYPES } from "../types/cart";

const CART_DATA = localStorage.getItem("cart");
const TOTAL_PRICE = localStorage.getItem("price");

const INITIAL_STATE = {
  isCartOpen: false,
  cart: CART_DATA ? JSON.parse(CART_DATA) : [],
  totalPrice: TOTAL_PRICE ? JSON.parse(TOTAL_PRICE) : 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_TYPES.TOGGLE_CART:
      return {
        ...state,
        isCartOpen: action.payload,
      };

    case CART_TYPES.ADD_ITEM:
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (!itemInCart) {
        return {
          ...state,
          cart: [...state.cart, action.payload],
          totalPrice: state.totalPrice + action.payload.price,
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((item) => {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }),
          totalPrice: state.totalPrice + action.payload.price,
        };
      }

    case CART_TYPES.REMOVE_ITEM:
      const itemToRemove = state.cart.find(
        (item) => item.id === action.payload
      );
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
        totalPrice:
          state.totalPrice - itemToRemove.price * itemToRemove.quantity,
      };

    case CART_TYPES.INCREMENT:
      const itemToIncrement = state.cart.find(
        (item) => item.id === action.payload
      );
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        }),
        totalPrice: state.totalPrice + itemToIncrement.price,
      };

    case CART_TYPES.DECREMENT:
      const itemToDecrement = state.cart.find(
        (item) => item.id === action.payload
      );
      return {
        ...state,
        cart: state.cart
          .map((item) => {
            if (item.id === action.payload) {
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            } else {
              return item;
            }
          })
          .filter((item) => item.quantity !== 0),
        totalPrice: state.totalPrice - itemToDecrement.price,
      };

    case CART_TYPES.CLEAR_CART:
      localStorage.clear();

      return {
        ...state,
        cart: [],
        totalPrice: 0,
      };

    default:
      return state;
  }
};

export default cartReducer;
