<template>
  <div>
    <product-item></product-item>
  </div>
</template>

<script>

import ProductItem from "@/components/main/ProductItem.vue";
export default {
  name: "ListOfProducts",
  components: {
    ProductItem,
  },
};
</script>

<style lang="scss" scoped>
</style>