<template>
  <div class="bg-slate-700 h-24 flex items-center p-2">
    <div>
      <Logo />
      <!-- <Title text="RakuNews" /> -->
    </div>
    <router-link to="/" class="mx-1"><Title text="Home" /></router-link>
    <router-link to="/favorite/" class="mx-1"
      ><Title text="Favorite"
    /></router-link>
    <router-link to="/timeLine/" class="mx-1"
      ><Title text="TimeLine"
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
