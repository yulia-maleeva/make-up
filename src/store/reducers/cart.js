import { CART_TYPES } from "../types/cart";

const CART_DATA = localStorage.getItem("cart");

const INITIAL_STATE = {
  isCartOpen: false,
  cart: CART_DATA ? JSON.parse(CART_DATA) : [],
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
        };
      }

    case CART_TYPES.REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case CART_TYPES.INCREMENT:
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
      };

    case CART_TYPES.DECREMENT:
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
      };

    default:
      return state;
  }
};

export default cartReducer;
