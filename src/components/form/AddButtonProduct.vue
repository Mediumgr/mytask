<template>
  <div>
    <button :disabled="statusForDisable" class="btn">
      <div class="wrapper-slot">
        <slot></slot>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: "AddButtonProduct",
  props: {
    statusForDisable: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  height: 36px;
  background: #7bae73;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background: #7eb1c9;
  }
}

.btn[disabled] {
  background: #eeeeee;
  color: red;
}

.wrapper-slot {
  height: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
}
</style>