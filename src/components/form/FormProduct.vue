<template>
  <div class="sticky">
    <form @submit.prevent="addProductToList" class="form">
      <name-product v-model.trim="nameProduct" class="nameGood">
        Наименование товара
      </name-product>
      <span v-if="errorProduct !== ''" class="errorProduct">{{
        errorProduct
      }}</span>
      <description-product v-model.trim="description" class="descriptionGood"
        >Описание товара</description-product
      >
      <link-product v-model.trim="link" class="linkOfGood"
        >Ссылка на изображение товара</link-product
      >
      <span v-if="errorLink !== ''" class="errorProduct">{{ errorLink }}</span>
      <price-product v-model.lazy="price" class="priceOfGood"
        >Цена товара</price-product
      >
      <span v-if="errorPrice !== ''" class="errorProduct">{{
        errorPrice
      }}</span>
      <add-button-product
        :statusForDisable="checkValidationFields === false"
        class="addOfGood"
        >{{
          added ? "Товар успешно добавлен" : "Добавить товар"
        }}</add-button-product
      >
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
  data() {
    return {
      nameProduct: "",
      description: "",
      link: "",
      price: "",
      errorProduct: "",
      errorPrice: "",
      errorLink: "",
      regExp: /(https?:\/\/.*\.(?:png|jpg|jpeg))/i,
      added: false,
    };
  },
  methods: {
    addProductToList() {
      this.errorPrice = "";

      if (this.price === "") {
        this.errorPrice = "Поле является обязательным";
      }
      if (Object.is(this.price, NaN)) {
        this.errorPrice = "Обновите страницу и введите цену товара цифрой";
      }

      if (
        this.errorProduct === "" &&
        this.errorPrice === "" &&
        this.errorLink === ""
      ) {

        let counterId = this.$store.state.productsList.length - 1;

        let stringPrice = this.price.replace(/\s/g, "");

        let product = {
          id: (counterId += 1),
          nameProduct: this.nameProduct,
          description: this.description,
          link: this.link,
          price: stringPrice,
        };

        this.$store.commit("ADD_PRODUCT_TO_LIST", product);

        this.added = true;
        setTimeout(() => {
          this.nameProduct = "";
          this.description = "";
          this.price = "";
          this.link = "";
          this.errorProduct = "";
          this.errorPrice = "";
          this.errorLink = "";
          this.added = false;
        }, 500);
      }
    },
    testLink(newValue) {
      let passed = this.regExp.test(newValue);
      if (!passed && this.added === false && newValue !== "") {
        this.errorLink = "Некорректный ввод ссылки страницы";
      } else this.errorLink = "";
    },
  },
  watch: {
    nameProduct(newValue) {
      if (newValue === "" && this.added === true) {
        this.errorProduct = "Поле является обязательным";
      } else this.errorProduct = "";
    },
    link(newValue) {
      if (newValue === "" && this.added === true) {
        this.errorLink = "Поле является обязательным";
      } else {
        this.testLink(newValue);
      }
    },
  },
  computed: {
    checkValidationFields() {
      if (
        this.nameProduct !== "" &&
        this.description !== "" &&
        this.link !== "" &&
        this.price !== "" &&
        this.errorProduct === "" &&
        this.errorPrice === "" &&
        this.errorLink === ""
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss">
/* @import "@/assets/styles/_vars.scss"; */

.sticky {
  .form {
    min-height: 440px;
    background: $background;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: $borderRadius;
    padding: 24px;

    @media (min-width: 320px) {
      width: 290px;
    }
    @media (min-width: 425px) {
      width: 332px;
    }
    @media (min-width: 768px) {
      position: sticky;
      top: 0;
    }

    .nameGood,
    .descriptionGood,
    .linkOfGood {
      padding-bottom: 16px;

      @media (min-width: 320px) {
        display: grid;
        grid-template-columns: 1fr;
      }
    }

    .addOfGood {
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
    &:hover {
      box-shadow: 0 5px 8px 0 rgb(0 0 0 / 36%);
    }
  }

  .errorProduct {
    font-family: $fontFamily;
    font-style: $fontStyle;
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    letter-spacing: -0.02em;
    color: #ff8484;
    padding: 0 0 2px 0;
    position: relative;
    top: -17px;
    height: 0px;
  }
}
</style>
