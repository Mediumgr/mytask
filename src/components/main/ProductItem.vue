<template>
  <div>
    <div class="product">
      <div @click="removeProduct(product)" class="product__remove">
        <img src="@/assets/images/Bin.png" alt="bin" />
      </div>
      <img :src="product.link" class="product__photo" />
      <div class="product__description">
        <div class="product__description_name">{{ product.nameProduct }}</div>
        <p class="product__description_title">
          {{ product.description }}
        </p>
        <div class="product__description_price">
          {{ Number(product.price).toLocaleString("ru-RU") }} руб.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    removeProduct(product) {
      this.$store.commit("REMOVE_PRODUCT", product);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_vars.scss";
.product {
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: $borderRadius;
  position: relative;

  &__remove {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -10px;
    right: -10px;
    width: 32px;
    height: 32px;
    background: #ff8484;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    cursor: pointer;
  }

  &__photo {
    background: rgb(103, 98, 98);
    width: inherit;
    height: 200px;
    border-radius: 4px 4px 0px 0px;
    object-fit: cover;
    width: 290px;
    @media (min-width: 425px) and (max-width: 767.98px) {
      width: 332px;
    }
    @media (min-width: 768px) and (max-width: 1023.98px) {
      width: 180px;
    }
    @media (min-width: 1024px) and (max-width: 1439.98px) {
      width: 200px;
    }
    @media (min-width: 1440px) {
      width: 332px;
    }
  }
  &__description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    height: 223px;
    word-wrap: break-word;

    &_title {
      font-family: $fontFamily;
      font-style: $fontStyle;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      @media (min-width: 320px) {
        font-size: 16px;
        line-height: 20px;
      }
      @media (min-width: 768px) {
        font-size: 11px;
        line-height: 18px;
      }
    }
    &_name {
      font-family: $fontFamily;
      font-style: $fontStyle;
      font-weight: $fontWeight;
      font-size: 20px;
    }
    &_price {
      font-family: $fontFamily;
      font-style: $fontStyle;
      font-weight: $fontWeight;
      font-size: 24px;
      line-height: 30px;
    }
  }
  &:hover {
    box-shadow: 0 5px 8px 0 rgb(0 0 0 / 36%);
  }
}
</style>