<template>
  <div class="bg-slate-700 h-24 p-2 z-10 flex justify-between items-center">
    <div class="flex items-center">
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
    <div class="flex flex-col items-center">
      <span class="block bg-white rounded-3xl p-2 w-11">
        <fa icon="user" class="text-slate text-2xl" />
      </span>
      <Title text="test user" class="text-sm pr-2" :hover="true" />
    </div>
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
