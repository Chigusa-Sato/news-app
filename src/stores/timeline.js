import { defineStore } from 'pinia';

export const useTimeline = defineStore('timeline-store', {
  state: () => {
    return {
      timeline: [
        {
          comment: 'コメントコメントコメント',
          article: {
            author: 'スポニチ Sponichi Annex',
            content: '',
            description:
              '56号を記録した村上について「まだ5年目の選手ですよね。いやーもう素晴らしいですね」と称賛した。さらに令和初の3冠王に輝いたことについても「今までになかったスケ… - スポーツニッポン新聞社の公式サイト',
            id: '180d224c5af31',
            publishedAt: '2022-05-17T08:00:04Z',
            source: { id: null, name: 'YouTube' },
            title:
              '松井秀喜氏がヤクルト・村上を称賛「今までになかったスケールの選手」 打撃フォームも独自分析 - スポニチアネックス Sponichi Annex',
            url: 'https://www.sponichi.co.jp/baseball/news/2022/10/12/kiji/20221012s00001173477000c.html',
            urlToImage:
              'https://www.sponichi.co.jp/baseball/news/2022/10/12/jpeg/20221012s00001173484000p_view.jpg',
            needsClip: true,
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
            needsClip: true,
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
