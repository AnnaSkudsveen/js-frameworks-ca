import { create } from "zustand";

const useStoreCart = create(function (set) {
  return {
    cart: [],
    addToCart: function (product) {
      console.log("Added to cart: ", product.id);
      set(function (state) {
        return { cart: [...state.cart, product] };
      });
    },

    clearCart: function () {
      set({ cart: [] });
    },

    removeFromCart: function (productId) {
      set(function (state) {
        return {
          cart: state.cart.filter(function (product) {
            return product.id !== productId;
          })
        };
      });
    }
  };
});

export default useStoreCart;
