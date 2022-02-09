<template>
  <TopNavbar />
  <NewArrivals />
</template>
<style></style>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  watchEffect,
  onMounted,
} from 'vue';
import TopNavbar from '../../components/TopNavbar.vue';
import NewArrivals from '../../components/newArrivals.vue';

export default defineComponent({
  components: {
    TopNavbar,
    NewArrivals,
  },
  setup() {},
});
</script>
