<template>
  <div>
    <div class="wrapper-slot">
      <slot></slot>
      <span class="mandatoryField"></span>
    </div>
    <input
      :value="value"
      @input="$emit('input', $event.target.value)"
      type="text"
      class="link"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "LinkProduct",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      placeholder: "Введите ссылку",
    };
  },
};
</script>

<style lang="scss" scoped>
/* @import "@/assets/styles/_vars.scss";
@import "@/assets/styles/_mixin.scss"; */

.link {
  height: $height;
  padding: 10px 10px 11px 16px;
  background: $background;
  box-shadow: $boxShadow;
  border-radius: $borderRadius;
  border: none;
  outline: none;
  &:focus {
    color: rgb(193, 86, 86);
  }
}

.wrapper-slot {
  @include headlinesOfForm($fontFamily, $fontStyle, 4px);
  position: relative;
}

.mandatoryField {
  width: 4px;
  height: 4px;
  background: #ff8484;
  border-radius: 4px;
  display: inline-block;
  position: absolute;
  top: 1px;
  left: 137px;
}
</style>