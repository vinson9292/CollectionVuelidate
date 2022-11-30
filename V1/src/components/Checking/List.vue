<template>
    <table>
        <CheckingItem 
        v-for="(item,index) in items" 
        :Checking="item"
        :add="add"
        :deleteItem="deleteItem"
        :savel="save"
        :index="index"
        />
    </table>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import CheckingItem from './Item.vue'
export default defineComponent({
    name: 'CheckingList',
    components: {
        CheckingItem
    },
    props: ['items','add','deleteItem','save']
})
</script>