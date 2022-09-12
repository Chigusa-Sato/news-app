<template>
  <div class="bg-blue-50 h-24 flex flex-col items-center">
    <div class="text-xl font-bold">News App</div>
    <div>
      <router-link to="/" class="mx-1">Home</router-link>
      <router-link to="/favorite/" class="mx-1">Favorite</router-link>
      <router-link to="/timeLine/" class="mx-1">TimeLine</router-link>
      <button
        class="
          bg-orange-500
          hover:bg-orange-600
          text-white
          px-4
          py-2
          rounded-lg
          shadow-lg
        "
      >
        ボタンだよ
      </button>
    </div>
  </div>
</template>
