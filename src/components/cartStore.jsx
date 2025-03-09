import { create } from "zustand";

const useStoreCart = create(function (set) {
  return {
    cart: [],
    addToCart: function (product) {
      console.log("Added to cart: ", product.id);

      set(function (state) {
        const existingProduct = state.cart.find(function (p) {
          return p.id === product.id;
        });

        if (existingProduct) {
          return {
            cart: state.cart.map(function (p) {
              if (p.id === product.id) {
                return { ...p, quantity: (p.quantity || 1) + 1 };
              }
              return p;
            })
          };
        } else {
          return {
            cart: [...state.cart, { ...product, quantity: 1 }]
          };
        }
      });
    },

    removeFromCart: function (productId) {
      set(function (state) {
        return {
          cart: state.cart
            .map((p) =>
              p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
            )
            .filter((p) => p.quantity > 0)
        };
      });
    },

    clearCart: function () {
      set({ cart: [] });
    }
  };
});

export default useStoreCart;
