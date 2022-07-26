<template>
  <div>
    <transition-group tag="div" name="animation" class="wrapper__products">
      <product-item
        v-for="item of productsList"
        :key="item.id"
        :product="item"
      ></product-item>
    </transition-group>
    <img
      :src="require('@/assets/images/spinner.gif')"
      v-if="loading === true"
      class="fa-spin"
    />
    <div
      v-if="productsList.length === 0 && productsAnimationFinished"
      class="noProducts"
    >
      Список товаров пуст
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/main/ProductItem.vue";

export default {
  name: "ListOfProducts",
  components: {
    ProductItem,
  },
  data() {
    return {
      productsAnimationFinished: false,
    };
  },
  props: {
    productsList: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    productsList() {
      if (this.productsList.length === 0) {
        setTimeout(() => {
          this.productsAnimationFinished = true;
        }, 1350);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper__products {
  display: grid;
  grid-template-columns: repeat(3, 332px);
  grid-gap: 16px;
  margin-bottom: 16px;

  @media (min-width: 320px) and (max-width: 424.98px) {
    grid-template-columns: 290px;
    grid-template-rows: auto;
  }
  @media (min-width: 425px) and (max-width: 767.98px) {
    grid-template-columns: 332px;
    grid-template-rows: auto;
  }
  @media (min-width: 768px) and (max-width: 1023.98px) {
    grid-template-columns: repeat(2, 180px);
    grid-template-rows: auto;
  }
  @media (min-width: 1024px) and (max-width: 1439.98px) {
    grid-template-columns: repeat(3, 200px);
    grid-template-rows: auto;
  }
}

.fa-spin {
  display: flex;
  justify-content: center;
  height: 50px;
  width: 50px;
  margin: 180px auto;
  align-items: center;
}

.noProducts {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  color: red;
  font-size: 24px;
}

.animation-enter-active,
.animation-leave-active {
  transition: all 1.3s ease;
}

.animation-enter,
.animation-leave-to {
  opacity: 0;
  transform: translateY(60px);
}
</style>