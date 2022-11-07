<template>
    <table>
        <PropertyItem 
        v-for="(property,index) in properts" 
        :property="property"
        :addProperty="addProperty"
        :deleteProperty="deleteProperty"
        :saveProperty="saveProperty"
        :index="index"
        />
    </table>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import PropertyItem from './PropertyItem.vue'
export default defineComponent({
    name: 'PropertyList',
    components: {
        PropertyItem
    },
    props: ['properts','addProperty','deleteProperty','saveProperty']
})
</script>