import { defineStore } from 'pinia';

export const useTimeline = defineStore('timeline-store', {
  state: () => {
    return {
      timeline: [
        {
          comment: 'コメントコメントコメント',
          article: {
            author: 'AuthorB',
            content: '',
            description:
              'ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示',
            id: '180d224c5af31',
            publishedAt: '2022-05-17T08:00:04Z',
            source: { id: null, name: 'YouTube' },
            title:
              'タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル',
            url: 'https://www.sponichi.co.jp/baseball/news/2022/10/12/kiji/20221012s00001173477000c.html',
            urlToImage:
              'https://www.sponichi.co.jp/baseball/news/2022/10/12/jpeg/20221012s00001173484000p_view.jpg',
            needsClip: true,
          },
        },
        {
          comment: 'コメントコメントコメント',
          article: {
            author: 'authorA',
            content: '',
            description:
              'ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示ニュース情報をここに表示',
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
