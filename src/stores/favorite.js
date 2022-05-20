import { defineStore } from 'pinia';

export const useFavorite = defineStore('favorite-store', {
  state: () => {
    return {
      favorites: [],
    };
  },
  getters: {
    // getContents(state) {
    //   const { cart } = state;
    //   return cart.reduce((contents, item) => {
    //     const index = contents.findIndex(
    //       (added) => added.isbn13 === item.isbn13
    //     );
    //     if (index > -1) {
    //       ++contents[index].quantity;
    //       return contents;
    //     }
    //     item.quantity = 1;
    //     contents.push(item);
    //     return contents;
    //   }, []);
    // },
    // count(state) {
    //   return state.cart.length;
    // },
    // total(state) {
    //   const { cart } = state;
    //   return cart.reduce((total, item) => {
    //     total = total + item.price;
    //     return total;
    //   }, 0);
    // },
  },

  actions: {
    addToFavorite(topic) {
      this.favorites.push(topic);
    },
    removeFromFavorite(id) {
      console.log(id);
      const deleteIndex = this.favorites.findIndex((fav) => {
        return fav.id === id;
      });
      this.favorites.splice(deleteIndex, 1);
    },
  },
});
