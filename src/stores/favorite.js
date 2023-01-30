import { defineStore } from 'pinia';

export const useFavorite = defineStore('favorite-store', {
  state: () => {
    return {
      favorites: [
        {
          author: 'authorA',
          content: null,
          description:
          'ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示',
          id: '180d224c5af31',
          publishedAt: '2022-05-17T08:00:04Z',
          source: { id: null, name: 'YouTube' },
          title:
          'タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル',
      url: 'https://www.youtube.com/watch?v=FpvJfVS3W6o',
          urlToImage: 'https://i.ytimg.com/vi/FpvJfVS3W6o/maxresdefault.jpg',
          needsClip: true,
        },
        {
          author: 'authorB',
          content: '',
          description:
          'ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示',
          id: '183bdbdf74b1e5',
          publishedAt: '2022-10-09T11:19:00Z',
          source: { id: null, name: 'Yomiuri.co.jp' },
          title:
          'タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル',
      url: 'https://www.yomiuri.co.jp/world/20221009-OYT1T50150/',
          urlToImage:
            'https://www.yomiuri.co.jp/media/2022/10/20221009-OYT1I50090-T.jpg?type=ogp',
          needsClip: true,
        },
      ],
    };
  },
  getters: {},

  actions: {
    addToFavorite(topic) {
      console.log(topic.description);
      //重複した記事は追加しない
      const isDupicated = this.favorites.some(
        (favorite) => favorite.id === topic.id
      );
      if (!isDupicated) {
        this.favorites.push(topic);
      }
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
