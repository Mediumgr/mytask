<template>
  <div>
    <select class="selected" v-model="selected">
      <option disabled value="">По умолчанию</option>
      <option>По убыванию</option>
      <option>По возрастанию</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.selected {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 121px;
  height: 36px;
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #b4b4b4;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 10px 10px;
  padding-left: 10px;
}
</style>