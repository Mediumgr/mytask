<template>
  <div>
    <div class="wrapper-slot">
      <slot></slot>
      <span class="mandatoryField"></span>
    </div>
    <input
      v-focus
      :value="value"
      @input="addName($event)"
      id="nameDescription"
      type="text"
      class="nameDescription"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "NameProduct",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      placeholder: "Введите наименование товара",
    };
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      },
    },
  },
  methods: {
    addName(event) {
        this.$emit("input", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
/* @import "@/assets/styles/_vars.scss";
@import "@/assets/styles/_mixin.scss"; */

.nameDescription {
  @include same_input_style($height, 4px, #fffefb);
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
  left: 97px;
}
</style>