<template>
    <tr>
        <td>
            <input v-model="property.type" @blur="v$.type.$touch">
            <div class="input-errors" v-for="error of v$.type.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
            </div>
        </td>
        <td>
            <input v-model="property.area" @blur="v$.area.$touch">
            <div class="input-errors" v-for="error of v$.area.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
            </div>
        </td>
        <td>
            <input v-model="property.price" @blur="v$.price.$touch" />
            <div class="input-errors" v-for="error of v$.price.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
            </div>
        </td>
        <td>
            <input type="text" v-model="property.envalue" @blur="v$.envalue.$touch" />
            <div class="input-errors" v-for="error of v$.envalue.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
            </div>
        </td>
        <td>
            <n-button class="btn btn-primary btn-group" @click="delProperty">Del</n-button>
        </td>
    </tr>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import type { IProperty } from '../../types/Interface/IProperty'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

export default defineComponent({
    name: 'PropertyItem',
    props: {
        property: {
            type: Object as () => IProperty,
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
        const min = (param: number) =>
            helpers.withParams(
                { type: 'min', value: param },
                (value: number) => !helpers.req(value) || value > param
            )
        const rules = {
            type: { required }, // Matches props.property.type
            area: { required, min: helpers.withMessage('必須大於11', min(11)) }, // Matches props.property.area
            price: { required, min: helpers.withMessage('必須大於10', min(10)) }, // Matches props.property.price
            envalue: { required, min: helpers.withMessage('必須大於9', min(9)) }, // Matches props.property.envalue
        }

        const v$ = useVuelidate(rules, state)
        const delProperty = () => {
            if (window.confirm('確認要刪除?')) {
                props.deleteProperty(props.index);
            }
        }
        return {
            state,
            delProperty,
            v$
        }
    }
})
</script>