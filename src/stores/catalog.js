import { defineStore } from 'pinia';
import axios from 'axios';

export const useCatalog = defineStore('catalog-store', {
  state: () => {
    return {
      newArrivals: [],
      fetching: false,
    };
  },

  getters: {
    results(state) {
      return state.newArrivals;
    },

    isFetching(state) {
      return state.fetching;
    },
  },

  actions: {
    async fetchNewArrivals() {
      this.fetching = true;
      //const response = await fetch('../../public/data/new-arrivals.json');
      try {
        const searchVideos = await axios.get(
          'https://www.googleapis.com/youtube/v3/search',
          {
            params: {
              q: 'naomi',
              part: 'snippet',
              type: 'video',
              maxResults: '20', // 最大検索数
              key: 'AIzaSyDvvBHFjcAHzSmL0TMQx8l54Tg5T70Q9Xk',
            },
          }
        );
        this.newArrivals = searchVideos.data;
        console.log(searchVideos.data)
      } catch (err) {
        this.newArrivals = [];
        console.error('Error loading new arrivals:', err);
        return err;
      }
      // this.fetching = false;
    },
  },
});
