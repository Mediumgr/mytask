<template>
  <div class="wrapper__products">
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

.wrapper__products {
  display: grid;
  grid-template-columns: repeat(3, 332px);
  grid-template-rows: repeat(1, 423px);
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

  .product {
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
    &:hover {
      box-shadow: 0 5px 8px 0 rgb(0 0 0 / 36%);
    }
  }
}
</style>