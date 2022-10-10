import { defineStore } from 'pinia';

export const useTimeline = defineStore('timeline-store', {
  state: () => {
    return {
      timeline: [
        {
          comment: 'コメントコメントコメント',
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
        {
          comment: 'コメントコメントコメント',
          article: {
            author: '読売新聞オンライン',
            content: '',
            description:
              '【キーウ＝川上大介】８日の爆発で一部崩落が起きたロシア本土とウクライナ南部クリミア半島を結ぶ「クリミア大橋」（全長約１９キロ・メートル）について、タス通信は、８日夕に車両と列車の通行が限定的に再開したと伝えた。英国防省',
            id: '183bdbdf74b1e5',
            publishedAt: '2022-10-09T11:19:00Z',
            source: { id: null, name: 'Yomiuri.co.jp' },
            title:
              '１９ｋｍのクリミア大橋崩落、ウクライナ情報機関が関与の報道…ゼレンスキー氏「未来は快晴」 - 読売新聞オンライン',
            url: 'https://www.yomiuri.co.jp/world/20221009-OYT1T50150/',
            urlToImage:
              'https://www.yomiuri.co.jp/media/2022/10/20221009-OYT1I50090-T.jpg?type=ogp',
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
