import { defineStore } from 'pinia';

import axios from 'axios';

function getUniqueStr(myStrong) {
  let strong = 1000;
  if (myStrong) strong = myStrong;
  return (
    new Date().getTime().toString(16) +
    Math.floor(strong * Math.random()).toString(16)
  );
}
export const useNews = defineStore('news-store', {
  state: () => {
    return {
      News: [],
      fetching: false,
      category: 'general',
    };
  },

  getters: {
    results(state) {
      return state.News;
    },

    isFetching(state) {
      return state.fetching;
    },
  },
  actions: {
    async fetchNews() {
      const APIKEY = import.meta.env.VITE_APP_API_KEY;
      this.fetching = true;
      try {
        const res = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=jp&category=' +
            this.category +
            `&apiKey=${APIKEY}`
        );
        const articles = res.data.articles.map((article) => {
          article.urlToImage === undefined ? '' : article.urlToImage;
          return {
            ...article,
            id: getUniqueStr(),
          };
        });

        this.News = articles;
      } catch (err) {
        this.News = [];
        console.error('Error loading new arrivals:', err);
        return err;
      }
      this.fetching = false;
    },
    fetchNews_detail(topicId) {
      const newsDetail = this.News.find((topic) => topic.id === topicId);
      return newsDetail;
    },
    async searchNews(keyword, category) {
      const APIKEY = import.meta.env.VITE_APP_API_KEY;
      this.fetching = true;
      const url =
        keyword === ''
          ? `https://newsapi.org/v2/top-headlines?country=jp&category=${category}&apiKey=${APIKEY}`
          : `https://newsapi.org/v2/top-headlines?country=jp&category=${category}&q=${keyword}&apiKey=${APIKEY}`;
      try {
        console.log(url);
        const res = await axios.get(url);
        const articles = res.data.articles.map((article) => {
          article.urlToImage === undefined ? '' : article.urlToImage;
          return {
            ...article,
            id: getUniqueStr(),
          };
        });
        this.News = articles;
      } catch (err) {
        this.News = [];
        console.error('Error loading new arrivals:', err);
        return err;
      }
      this.fetching = false;
    },
  },
});
// test用

