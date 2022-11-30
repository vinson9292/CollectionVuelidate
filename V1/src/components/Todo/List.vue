<template>
    <table>
        <TodoItem 
        v-for="(item,index) in items" 
        :Todo="item"
        :add="add"
        :deleteItem="deleteItem"
        :savel="save"
        :index="index"
        />
    </table>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import TodoItem from './Item.vue'
export default defineComponent({
    name: 'TodoList',
    components: {
        TodoItem
    },
    props: ['items','add','deleteItem','save']
})
</script>