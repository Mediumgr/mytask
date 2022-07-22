<template>
  <div>
    <form @submit.prevent="addOfGood" class="form center">
      <name-product class="nameGood">Наименование товара</name-product>
      <description-product class="descriptionGood"
        >Описание товара</description-product
      >
      <link-product class="linkOfGood">Ссылка на изображение товара</link-product>
      <price-product class="priceOfGood">Цена товара</price-product>
      <add-button-product class="addOfGood">Добавить товар</add-button-product>
    </form>
  </div>
</template>

<script>
import NameProduct from "@/components/form/NameProduct.vue";
import DescriptionProduct from "@/components/form/DescriptionProduct.vue";
import LinkProduct from "@/components/form/LinkProduct.vue";
import PriceProduct from "@/components/form/PriceProduct.vue";
import AddButtonProduct from "@/components/form/AddButtonProduct.vue";

export default {
  name: "FormProduct",
  components: {
    NameProduct,
    DescriptionProduct,
    LinkProduct,
    PriceProduct,
    AddButtonProduct,
  },
  methods: {
    addOfGood() {
      console.log("Товар добавлен");
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_vars.scss";

.form {
  height: 440px;
  background: $background;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: $borderRadius;

  .nameGood,
  .descriptionGood,
  .linkOfGood,
  .addOfGood {
    padding-bottom: 16px;

    @media (min-width: 320px) {
      display: grid;
      grid-template-columns: 1fr;
    }
  }

  .priceOfGood {
    padding-bottom: 24px;

    @media (min-width: 320px) {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
}

.center {
  padding: 24px;

   @media (min-width: 320px) {
    width: 290px;
  } 
   @media (min-width: 425px) {
    width: 332px;
  } 
}
</style>
