<template>
  <div>
    <div class="wrapper-slot">
      <slot></slot>
    </div>
    <textarea
      :value="value"
      @input="$emit('input', $event.target.value)"
      type="text"
      class="goodDescription"
      :placeholder="placeholder"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "DescriptionProduct",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      placeholder: "Введите описание товара",
    };
  },
};
</script>

<style lang="scss" scoped>
/* @import "@/assets/styles/_vars.scss";
@import "@/assets/styles/_mixin.scss"; */

.goodDescription {
  height: 108px;
  padding: 10px 10px 10px 16px;
  background: $background;
  box-shadow: $boxShadow;
  border-radius: $borderRadius;
  border: none;
  outline: none;
  resize: none;

  &:focus {
    color: rgb(193, 86, 86);
  }
}

.wrapper-slot {
  @include headlinesOfForm($fontFamily, $fontStyle, 4px);
}
</style>