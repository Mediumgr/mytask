<template>
    <div>
    <div class="wrapper-slot">
        <slot></slot>
        <span class="mandatoryField"></span>
    </div>
    <input type="text" class="priceDescription" :placeholder="placeholder"/>
  </div>
</template>

<script>
export default {
    name: "PriceProduct",
    data() {
        return {
            placeholder: "Введите цену"
        }
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_vars.scss";
@import "@/assets/styles/_mixin.scss";

.priceDescription {
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
  background: #FF8484;
  border-radius: 4px;
  display: inline-block;
  position: absolute;
  top: 1px;
  left: 55px;
}
</style>