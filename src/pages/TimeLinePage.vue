<template>
  <div class="container flex flex-wrap items-center justify-center">
    <TimeLine />
  </div>
</template>
<script>
import { computed, defineComponent } from 'vue';
import { useTimeline } from '../stores/timeline';
import TimeLine from '../components/templates/TimeLine.vue';
export default defineComponent({
  components: {
    TimeLine,
  },
  setup() {
    //お気に入り追加
    const timelineStore = useTimeline();
    const timeline = computed(() => timelineStore.timeline);

    return { timeline };
  },
});
</script>
