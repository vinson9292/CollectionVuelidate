<template>
  <div style="">
    <TodoItem
      class="row-item"
      v-for="(item, index) in items"
      :Todo="item"
      :add="add"
      :deleteItem="deleteItem"
      :savel="save"
      :index="index"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TodoItem from "./Item.vue";
export default defineComponent({
  name: "TodoList",
  components: {
    TodoItem,
  },
  props: ["items", "add", "deleteItem", "save"],
});
</script>
<style scope>
.row-item {
  margin-bottom: 5px;
}
</style>
