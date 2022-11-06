<template>
    <table>
        <PropertyItem 
        v-for="(property, index) in properts" 
        :property="property"
        />
    </table>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import PropertyItem from './PropertyItem.vue'
import type { IProperty } from '../types/IProperty'
export default defineComponent({
    name: 'PropertyList',
    components: {
        PropertyItem
    },
    props: {
        properts: {
            type: Array<IProperty>,
            required: true
        }
    },
    // props: ['properts'],
    setup() {
        // const propertyList = properts;
        // return {
        //     properts
        // }
    }
})
</script>