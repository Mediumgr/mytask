<template>
  <div class="wrapper">
    <header class="wrapper__header">
      <p class="description">Добавление товара</p>
      <v-button></v-button>
    </header>
    <div class="content">
      <aside>
        <form-product></form-product>
      </aside>
      <main>
        <list-of-products></list-of-products>
      </main>
    </div>
  </div>
</template>

<script>
import FormProduct from "@/components/form/FormProduct.vue";
import ListOfProducts from "@/components/main/ListOfProducts.vue";
import VButton from "@/components/header/VButton.vue";

export default {
  name: "myApp",
  components: {
    FormProduct,
    ListOfProducts,
    VButton,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_vars.scss";
@import "@/assets/styles/_mixin.scss";

body {
  background: #e5e5e5;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrapper {
  @media (max-width: 767.98px) {
    justify-content: center;
    margin-top: 10px;
  }
  @media (min-width: 768px) {
    margin: 30px 32px 16px 32px;
  }
  &__header {
    display: flex;
    justify-content: space-between;
  }
}

.content {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 16px;
}

.description {
  margin-bottom: 16px;
  font-family: $fontFamily;
  font-style: $fontStyle;
  font-weight: $fontWeight;
  font-size: $fontSize;
  line-height: 35px;
  color: $color;

  @media (min-width: 320px) and (max-width: 425px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
}

::-webkit-input-placeholder {
  @include style_for_placeholder(12px, $fontFamily);
}

::-moz-placeholder {
  @include style_for_placeholder(12px, $fontFamily);
}
:-moz-placeholder {
  @include style_for_placeholder(12px, $fontFamily);
}

:-ms-input-placeholder {
  @include style_for_placeholder(12px, $fontFamily);
}
</style>
