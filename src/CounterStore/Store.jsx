import { create } from "zustand";

const useCounterStore = create((set) => ({
  cart: [],
  message: [],

  action: {
    add: (product) => {
      set((state) => {
        const isExist = state.cart.find(
          (item) => item.id === Number(product.id)
        );

        if (isExist) {
          return {
            message: "Already added to the cart",
          };
        }

        return {
          cart: [...state.cart, { ...product, number: 1 }],
          message: "Added to the cart",
        };
      });
    },

    reset: () => {
      set(() => ({
        message: [],
      }));
    },

    remove: (id) => {
      set((state) => ({
        cart: state.cart.filter((item) => item.id !== id),
      }));
    },
  },

  increase: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id
          ? { ...item, number: (item.number || 1) + 1 }
          : item
      ),
    })),

  decrease: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id
          ? { ...item, number: item.number - 1 }
          : item
      ),
    })),
}));

export default useCounterStore;