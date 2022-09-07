<template>
  <div>
    <select class="selected" v-model="selected" @change="newSelect($event)">
      <option disabled value="">По умолчанию</option>
      <option v-for="option in categories" :key="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "",
      categories: ["Min", "Max", "Name"],
    };
  },
  methods: {
    newSelect(event) {
      this.$store.commit("FILTER__PRODUCTS", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
/* @import "@/assets/styles/_vars.scss"; */
.selected {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 121px;
  height: 36px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-family: $fontFamily;
  font-style: $fontStyle;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #b4b4b4;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 10px 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none !important;
  padding: 10px 26px 11px 16px;
  background: url(@/assets/images/arrow.png) no-repeat right;
  background-color: #fffefb;
  background-position-x: 100px;
}
</style>