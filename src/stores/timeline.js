import { defineStore } from 'pinia';

export const useTimeline = defineStore('timeline-store', {
  state: () => {
    return {
      timeline: [
        {
          comment: 'めいちゃん可愛いすぎる',
          article: {
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
        },
      ],
    };
  },
  getters: {},

  actions: {
    submitComments(comment, newsDetail) {
      const postComment = {
        comment: comment,
        article: newsDetail,
      };
      this.timeline.push(postComment);
      console.log(this.timeline);
    },
  },
});
