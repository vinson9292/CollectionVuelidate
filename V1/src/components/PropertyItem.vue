<template>
    <tr>
        <td>
            <input v-model="property.type">
            <div class="input-errors" v-for="error of v$.type.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
            </div>
        </td>
        <td>
            <input v-model="property.area">
            <div class="input-errors" v-for="error of v$.area.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
            </div>
        </td>
        <td>
            <input v-model="property.price" />
            <div class="input-errors" v-for="error of v$.price.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
            </div>
        </td>
        <td>
            <input type="text" v-model="property.envalue" />
            <div class="input-errors" v-for="error of v$.envalue.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
            </div>
        </td>
        <td>
            <button @deleteProperty="() => deleteProperty">Del</button>
        </td>
    </tr>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { Property } from '../types/Property'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default defineComponent({
    name: 'PropertyItem',
    props: {
        property: {
            type: Property,
            required: true,
        },
        deleteProperty: {
            type: Function,
            required: true
        },
        index: {
            type: Number,
            required: true,
        },
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
        const deleteProperty = () => {
            if (window.confirm('確認要刪除?')) {
                props.deleteProperty(props.index)
            }
        }
        return {
            state,
            v$,
            deleteProperty
        }
    }
})
</script>