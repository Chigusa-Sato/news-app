import { defineStore } from 'pinia';

export const useFavorite = defineStore('favorite-store', {
  state: () => {
    return {
      favorites: [
        {
          author: null,
          content: null,
          description:
            '7月スタートの火曜ドラマ『ユニコーンに乗って』の主演に永野芽郁が決定!!永野自身も好きなドラマ枠での出演が決定した喜びを語る!!さらに、本作で初挑戦となるCEO役のための準備していることとは!?魅力満載のスペシャルインタビュー!!■番組概要７月期の火曜ドラマは、大北はるかが脚本を手掛ける完全オリジナルストーリー『...',
          id: '180d224c5af31',
          publishedAt: '2022-05-17T08:00:04Z',
          source: { id: null, name: 'YouTube' },
          title:
            '【新火曜ドラマ】永野芽郁 初のCEO役に挑戦!! スペシャルインタビュー!!『ユニコーンに乗って』【TBS】 - TBS公式 YouTuboo',
          url: 'https://www.youtube.com/watch?v=FpvJfVS3W6o',
          urlToImage: 'https://i.ytimg.com/vi/FpvJfVS3W6o/maxresdefault.jpg',
        },
      ],
    };
  },
  getters: {},

  actions: {
    addToFavorite(topic) {
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
