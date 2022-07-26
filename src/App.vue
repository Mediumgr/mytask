<template>
  <div>
    <transition name="animation" v-if="success">
      <succesfull-added class="succesfull"
        >Товар успешно добавлен</succesfull-added
      >
    </transition>
    <header class="header">
      <p class="description">Добавление товара</p>
      <button-select />
    </header>
    <div class="wrapper">
      <div class="wrapper__content">
        <form-product></form-product>
        <main>
          <list-of-products
            :productsList="productsList"
            :loading="loading"
          ></list-of-products>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import FormProduct from "@/components/form/FormProduct.vue";
import ListOfProducts from "@/components/main/ListOfProducts.vue";
import ButtonSelect from "@/components/header/ButtonSelect.vue";
import SuccesfullAdded from "@/components/main/SuccesfullAdded.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "myApp",
  components: {
    FormProduct,
    ListOfProducts,
    ButtonSelect,
    SuccesfullAdded,
  },
  data() {
    return {
      loading: false,
      success: false,
    };
  },
  methods: {
    ...mapActions(["fetchProducts"]),
  },
  computed: {
    ...mapGetters({ productsList: "getProductsList", successGetter: "successAnimation" }),
  },
  watch: {
    successGetter() {
      if (this.successGetter.length !== 0) {
        this.success = true;
        setTimeout(() => {
          this.success = false;
        }, 1300);
      }
    },
  },
  created() {
    if (localStorage.length !== 0 && this.productsList.length !== 0) {
      let existedProducts = JSON.parse(localStorage.getItem("my-productsList"));
      this.$store.commit("SET_EXISTED_PRODUCTS_LIST", existedProducts);
    } else {
      this.loading = true;
      this.fetchProducts().then(() => {
        this.loading = false;
      });
    }
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

.succesfull {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 10px;
  left: 0px;
  width: 100%;
  padding: 5px;
  color: red;
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

.animation-enter-active,
.animation-leave-active {
  transition: all 1.2s;
}

.animation-leave-to {
  opacity: 0;
  transform: translateY(60px);
}
</style>
