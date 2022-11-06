<template>
    <tr>
        <td>
            <input type="text" v-model="property.type" @blur="v$.type.$touch"/>
            <div v-if="v$.type.$error">type field has an error.</div>
        </td>
        <td>
            <input type="text" v-model="property.area" @blur="v$.area.$touch"/>
            <div v-if="v$.area.$error">type field has an error.</div>
        </td>
        <td>
            <input type="text" v-model="property.price" @blur="v$.price.$touch"/>
            <div v-if="v$.price.$error">type field has an error.</div>
        </td>
        <td>
            <input type="text" v-model="property.envalue" @blur="v$.envalue.$touch"/>
            <div v-if="v$.envalue.$error">type field has an error.</div>
        </td>
    </tr>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import {Property} from '../types/Property'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default defineComponent({
    name: 'PropertyItem',
    props: {
        property: {
            type: Property,
            required: true,
        }
    },
    setup(props) {
        const state = reactive(props.property)
        const rules = {
            type: { required }, // Matches props.property.type
            area: { required }, // Matches props.property.area
            price: { required }, // Matches props.property.price
            envalue: { required }, // Matches props.property.envalue
        }
        const v$ = useVuelidate(rules, state)
        console.log(v$.value);
        return {
            state,
            v$
        }
    }
})
</script>