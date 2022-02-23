<template>
  <TopNavbar />
  <NewArrivals />
  <Footer />
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
import Footer from '../../components/Footer.vue';

export default defineComponent({
  components: {
    TopNavbar,
    NewArrivals,
    Footer,
  },
  setup() {},
});
</script>
