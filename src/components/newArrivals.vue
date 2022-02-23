<template>
  <div class="container">
    {{ newArrivals }}
    <div
      class="wrapper"
      v-for="(video, index) in newArrivals.items"
      :key="index"
    >
      <div class="content">
        <h1>{{ video }}</h1>
        <span class="button" @click="addToCart">♡</span>
        <!-- <img :src="video.snippet.thumbnails.default.url" alt="" /> -->
        <!-- <p>{{ video.snippet.title }}</p>
        <p>{{ video.snippet.channelTitle }}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  reactive,
  watchEffect,
  onMounted,
} from 'vue';
// import { mapState, mapActions } from 'pinia';
import { useCatalog } from '../stores/catalog.js';
import axios from 'axios';

export default defineComponent({
  setup() {
    const catalogStore = useCatalog();
    const newArrivals = computed(() => catalogStore.newArrivals);

    //createdはsetup関数内に記載
    catalogStore.fetchNewArrivals();
    return { newArrivals };

    //addToCart関数を追記
  },
  // mounted() {
  //   console.log(this.newArrivals);
  //   axios
  //     .get('https://www.googleapis.com/youtube/v3/search', {
  //       params: {
  //         q: 'naomi',
  //         part: 'snippet',
  //         type: 'video',
  //         maxResults: '20', // 最大検索数
  //         key: 'AIzaSyDvvBHFjcAHzSmL0TMQx8l54Tg5T70Q9Xk',
  //       },
  //     })
  //     .then((res) => console.log(res));
  // },
});
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 30px;
}
.wrapper {
  background: rgb(238, 238, 238);
  width: 48%;
}
.button {
  display: block;
  background: rgb(93, 93, 255);
  opacity: 80%;
  border-radius: 5%;
  width: 80px;
  height: 30px;
  font-weight: bold;
  font-size: large;
  margin: auto;
}
</style>
