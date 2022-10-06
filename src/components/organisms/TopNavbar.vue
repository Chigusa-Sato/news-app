<template>
  <div class="bg-slate-700 h-24 flex items-center p-2 z-10">
    <div>
      <router-link to="/" class="mx-1"><Logo /></router-link>
    </div>
    <router-link to="/" class="mx-1"
      ><Title text="Home" :hover="true"
    /></router-link>
    <router-link to="/favorite/" class="mx-1"
      ><Title text="Favorite" :hover="true"
    /></router-link>
    <router-link to="/timeLine/" class="mx-1"
      ><Title text="TimeLine" :hover="true"
    /></router-link>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Logo from '../atoms/Logo.vue';
import Title from '../atoms/TitleText.vue';
export default defineComponent({
  components: { Logo, Title },
  setup() {
    //ルーティング周り
  },
});
</script>
