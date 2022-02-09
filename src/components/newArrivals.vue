<template>
  <div class="container">
    <div class="wrapper" v-for="(newbook, index) in newArrivals" :key="index">
      <div class="content">
        <h1>{{ newbook.title }}</h1>
        <img :src="newbook.image" alt="" />
        <p>${{ newbook.price }}</p>
        <p>{{ newbook.author }}</p>
        <p>{{ newbook.description }}</p>
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

export default defineComponent({
  setup() {
    const catalogStore = useCatalog();
    const newArrivals = computed(() => catalogStore.newArrivals);

    const fetchNewArrivals = () => {
      catalogStore.fetchNewArrivals();
    };
    return { newArrivals, fetchNewArrivals };
  },
  //createdをvue3で書くとどうなるの・・・？？
  created() {
    //テンプレートが作成されたら、このアクションを呼び出します。
    this.fetchNewArrivals();
  },
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
</style>
