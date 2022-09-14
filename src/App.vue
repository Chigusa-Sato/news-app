<template>
  <div class="h-full">
    <TopNavbar class="min-h-1/6" />
    <div class="min-h-4/6 flex justify-center p-4">
      <router-view></router-view>
    </div>
    <!-- <Footer class="min-h-1/6" /> -->
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  watchEffect,
  onMounted,
} from 'vue';
import TopNavbar from './components/organisms/TopNavbar.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  components: {
    TopNavbar,
    Footer,
  },
  setup() {},
});
</script>

<style>
#app {
  /* width: 1040px; */
  height: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
