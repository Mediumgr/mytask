<template>
  <div>
    <div class="wrapper-slot">
        <slot></slot>
        <span class="mandatoryField"></span>
    </div>
    <input type="text" class="nameDescription" :placeholder="placeholder"/>
  </div>
</template>

<script>
export default {
    name: "NameProduct",
    data() {
        return {
            placeholder: "Введите наименование товара"
        }
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_vars.scss";
@import "@/assets/styles/_mixin.scss";

.nameDescription {
  @include same_input_style($height, 4px, #fffefb);
}

.wrapper-slot {
  @include headlinesOfForm($fontFamily, $fontStyle, 4px);
  position: relative;
}

.mandatoryField {
  width: 4px;
  height: 4px;
  background: #FF8484;
  border-radius: 4px;
  display: inline-block;
  position: absolute;
  top: 1px;
  left: 97px;
}
</style>