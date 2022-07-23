<template>
  <div>
    <header class="header">
      <p class="description">Добавление товара</p>
      <button-select/>
    </header>
    <div class="wrapper">
      <div class="wrapper__content">
        <aside>
          <form-product></form-product>
        </aside>
        <main>
          <list-of-products></list-of-products>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import FormProduct from "@/components/form/FormProduct.vue";
import ListOfProducts from "@/components/main/ListOfProducts.vue";
import ButtonSelect from "@/components/header/ButtonSelect.vue";

export default {
  name: "myApp",
  components: {
    FormProduct,
    ListOfProducts,
    ButtonSelect,
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

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 16px;
  width: 290px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 425px) {
    width: 332px;
  }
  @media (min-width: 768px) {
    width: 724px;
  }
  @media (min-width: 1024px) {
    width: 980px;
  }
  @media (min-width: 1440px) {
    width: 1376px;
  }
}

.wrapper {
  display: flex;
  justify-content: center;

  &__content {
    display: grid;
    grid-gap: 16px;

    @media (min-width: 768px) {
      display: flex;
    }
  }
}

.description {
  font-family: $fontFamily;
  font-style: $fontStyle;
  font-weight: $fontWeight;
  font-size: $fontSize;
  line-height: 35px;
  color: $color;

  @media (min-width: 320px) and (max-width: 767.98px) {
    font-size: 16px;
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
