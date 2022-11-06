<template>
    <table>
        <PropertyItem 
        v-for="property in properts" 
        :property="property"
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
    props: ['properts']
})
</script>