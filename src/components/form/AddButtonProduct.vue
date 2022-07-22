<template>
  <div>
    <button class="btn" @click="addOfProduct">
      <div class="wrapper-slot">
        <slot></slot>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: "AddButtonProduct",
  methods: {
    addOfProduct() {
      console.log("Товар добавлен");
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  height: 36px;
  background: #eeeeee;
  border-radius: 10px;
  border: none;
  outline: none;
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
  color: #b4b4b4;
}
</style>