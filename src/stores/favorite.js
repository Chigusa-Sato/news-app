import { defineStore } from 'pinia';

export const useFavorite = defineStore('favorite-store', {
  state: () => {
    return {
      favorites: [],
    };
  },
  getters: {},

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
