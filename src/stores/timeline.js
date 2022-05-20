import { defineStore } from 'pinia';

export const useTimeline = defineStore('timeline-store', {
  state: () => {
    return {
      timeline: [
        {
          comment:
            '( ,,`･ω･´)ﾝﾝﾝ？粉々に割れた窓ガラス。床には雑誌などが散乱し、すっぽりと建物に入った白い車は、いすを巻き込んで止まっている。粉々に割れた窓ガラス。床には雑誌などが散乱し、すっぽりと建物に入った白い車は、いすを巻き込んで止まっている。',
          article: {
            author: null,
            content: null,
            description:
              '粉々に割れた窓ガラス。床には雑誌などが散乱し、すっぽりと建物に入った白い車は、いすを巻き込んで止まっている。現場は、長崎・島原市の病院。60代の女性が運転する軽乗用車が、待合室に突っ込んだ。事故は、どんな状況で起きたのか。その一部始終をとらえた映像。時刻は、17日午前8時40分過ぎ。待合室には、いすに座り診察を待...',
            id: '180d21c6b2e38f',
            publishedAt: '2022-05-17T10:10:39Z',
            source: { id: null, name: 'YouTube' },
            title:
              '病院の待合室に車突っ込む 突然...一部始終カメラに - FNNプライムオンライン',
            url: 'https://www.youtube.com/watch?v=YTvzcBLOSyM',
            urlToImage: 'https://i.ytimg.com/vi/YTvzcBLOSyM/maxresdefault.jpg',
          },
        },
        {
          comment:
            'いいね！！！自身も好きなドラマ枠での出演が決定した喜びを語る!!さらに、本作で初挑戦となるCEO役のための準備していることとは!?魅力満載のスペシャルインタビュー!!■番組概要７月期の火曜ドラマは、大北はるかが脚本を手掛ける完全オリジナルストーリー『..',
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
      console.log('コメント追加したい', comment, newsDetail);
      const postComment = {
        comment: comment,
        article: newsDetail,
      };
      this.timeline.push(postComment);
      console.log(this.timeline);
    },
  },
});
