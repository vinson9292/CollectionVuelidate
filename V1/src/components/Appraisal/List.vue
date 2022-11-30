<template>
    <table>
        <AppraisalItem 
        v-for="(item,index) in items" 
        :Appraisal="item"
        :add="add"
        :deleteItem="deleteItem"
        :savel="save"
        :index="index"
        />
    </table>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import AppraisalItem from './Item.vue'
export default defineComponent({
    name: 'AppraisalList',
    components: {
        AppraisalItem
    },
    props: ['items','add','deleteItem','save']
})
</script>