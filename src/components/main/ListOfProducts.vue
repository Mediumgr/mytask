<template>
  <div>
    <transition-group tag="div" name="animation" class="wrapper__products">
      <product-item
        v-for="(item, index) of getProductsList"
        :key="index"
        :product="item"
      ></product-item>
    </transition-group>
<!--     <font-awesome-icon v-if="getProductsList" icon="fa-solid fa-spinner fa-spin"/> -->
  </div>
</template>

<script>
import ProductItem from "@/components/main/ProductItem.vue";
import { mapGetters } from "vuex";

export default {
  name: "ListOfProducts",
  components: {
    ProductItem,
  },
  computed: {
    ...mapGetters(["getProductsList"]),
  },
};
</script>

<style lang="scss" scoped>
.wrapper__products {
  display: grid;
  grid-template-columns: repeat(3, 332px);
  grid-gap: 16px;

  @media (min-width: 320px) and (max-width: 424.98px) {
    grid-template-columns: repeat(1, 290px);
    grid-template-rows: repeat(1, auto);
  }
  @media (min-width: 425px) and (max-width: 767.98px) {
    grid-template-columns: repeat(1, 332px);
    grid-template-rows: repeat(1, auto);
  }
  @media (min-width: 768px) and (max-width: 1023.98px) {
    grid-template-columns: repeat(2, 180px);
    grid-template-rows: repeat(1, auto);
  }
  @media (min-width: 1024px) and (max-width: 1439.98px) {
    grid-template-columns: repeat(3, 200px);
    grid-template-rows: repeat(1, auto);
  }
}

.animation-enter-active,
.animation-leave-active {
  transition: all 1.3s;
}

.animation-enter {
  opacity: 0;
  transform: scale(0.4);
}

.animation-leave-to {
  opacity: 0;
  transform: translateY(60px);
}
</style>