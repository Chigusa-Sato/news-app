import { createRouter } from 'vue-router';
import News from './pages/news.vue';
import FavoriteTopic from './pages/favorite.vue';
import TimeLine from './pages/timeLine.vue';
import Comments from './pages/comments.vue';

const routes = [
  {
    path: '/',
    component: News,
  },
  {
    path: '/timeLine/',
    component: TimeLine,
  },
  {
    path: '/favorite/',
    component: FavoriteTopic,
  },
  {
    path: '/comments/:topicId',
    name: 'comments',
    component: Comments,
  },
];

export default function (history) {
  return createRouter({
    history,
    routes,
  });
}
