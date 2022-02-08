<script setup>
import { useCatalog } from '../stores/catalog.js';
</script>

<template>
  <div>
    {{ newArrivals }}
    <div v-for="(newbook, index) in newArrivals" :key="index">
      <div>
        <h1>{{ newbook.title }}({{ newbook.author }})</h1>
        <img :src="newbook.image" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
<script>
import { mapState, mapActions } from 'pinia';

export default {
  computed: {
    ...mapState(useCatalog, { newArrivals: 'results' }),
  },

  methods: {
    ...mapActions(useCatalog, ['fetchNewArrivals']),

    addToCart() {
      //後で書く
    },
  },

  created() {
    //テンプレートが作成されたら、このアクションを呼び出します。
    this.fetchNewArrivals();
  },
};
</script>
