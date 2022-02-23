<template>
  <div class="wrapper text-gray-600">
    <TopNavbar />
    <div>
      <div>
        <h1 class="font-bold text-xl">Favorite</h1>
        
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped src="./cart.css"></style>
<script>
import TopNavbar from '../../components/TopNavbar.vue';
import Footer from '../../components/Footer.vue';
import { useCart } from '../../stores/cart.js';
import { mapState, mapActions } from 'pinia';

export default {
  components: {
    TopNavbar,
    Footer,
  },
  computed: {
    //storeからgettersの値を取得
    ...mapState(useCart, {
      contents: 'getContents',
      count: 'count',
      cartTotal: 'total',
    }),

    total() {
      return Math.max(this.cartTotal - this.promo.value, 0).toFixed(2);
    },
  },

  mounted() {},

  data() {
    return {
      currency: {
        name: 'USD',
        symbol: '$',
      },

      promo: {
        code: 'EXAMPLE CODE',
        value: 5,
      },
    };
  },
};
</script>
