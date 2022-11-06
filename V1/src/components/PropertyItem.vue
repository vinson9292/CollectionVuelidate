<template>
<tr>
    <td>
        <input type="text" v-model="property.ptype"/>
    </td>
    <td>
        <input type="text" v-model="property.area"/>
    </td>
    <td>
        <input type="text" v-model="property.price"/>
    </td>
    <td>
        <input type="text" v-model="property.envalue"/>
    </td>
</tr>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { IProperty } from '../types/IProperty'
export default defineComponent({
    name: 'PropertyItem',
    props: {
        property: {
            type: Object as () => IProperty,
            required: true,
        }
    },
    // setup() {
    //     return {
            
    //     }
    // }
})
</script>