<template>
  <div class="container">
    <div class="wrapper" v-for="(newbook, index) in newArrivals" :key="index">
      <div class="content">
        <h1>{{ newbook.title }}</h1>
        <span class="button" @click="addToCart">ADD</span>
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

    //createdはsetup関数内に記載
    catalogStore.fetchNewArrivals();
    return { newArrivals };

    //addToCart関数を追記
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
