import { defineStore } from 'pinia';

export const useCart = defineStore('cart-store', {
  state: () => {
    return {
      cart:[]
    };
  },

  getters: {},

  actions: {},
});
