<template>
  <div class="wrapper-product">
    <div class="product">
      <div class="product__photo"></div>
      <div class="product__description">
        <div class="product__description_name">Наименование товара</div>
        <div class="product__description_title">
          Довольно-таки интересное описание товара в несколько строк.
          Довольно-таки интересное описание товара в несколько строк
        </div>
        <div class="product__description_price">10 000</div>
      </div>
    </div>
    <div class="product">
      <div class="product__photo"></div>
      <div class="product__description">
        <div class="product__description_name">Наименование товара</div>
        <div class="product__description_title">
          Довольно-таки интересное описание товара в несколько строк.
          Довольно-таки интересное описание товара в несколько строк
        </div>
        <div class="product__description_price">10 000</div>
      </div>
    </div>
    <div class="product">
      <div class="product__photo"></div>
      <div class="product__description">
        <div class="product__description_name">Наименование товара</div>
        <div class="product__description_title">
          Довольно-таки интересное описание товара в несколько строк.
          Довольно-таки интересное описание товара в несколько строк
        </div>
        <div class="product__description_price">10 000</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-item",
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_vars.scss";

.wrapper-product {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
}

.product {
  width: 332px;
  height: 423px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: $borderRadius;

  &__photo {
    background: rgb(103, 98, 98);
    width: inherit;
    height: 200px;
    border-radius: 4px 4px 0px 0px;
  }
  &__description {
    height: 223px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &_title {
      padding: 16px 16px;
    }
    &_name {
      padding: 16px 16px 0 16px;
    }
    &_price {
      padding: 30px 16px 24px 16px;
    }
  }
}
</style>