import { create } from "zustand";

const useFavorite = create((set) => ({
  cart: [],

  action: {
    add: (product) => {
      set((state) => {
        const isExite = state.cart.find(
          (item) => item.id === Number(product.id)
        );

        if (isExite) {
          return state;
        }

        return {
          cart: [...state.cart, { ...product }],
        };
      });
    },

    remove: (id) => {
      set((state) => ({
        cart: state.cart.filter(
          (item) => Number(item.id) !== id
        ),
      }));
    },
  },
}));

export default useFavorite;